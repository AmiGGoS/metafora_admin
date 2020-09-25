import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ajax } from 'rxjs/ajax';
import { switchMap } from 'rxjs/operators';
import { request, getToken } from 'config';

// reactstrap components
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

class EditGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        group: props.group,
        selected: [],
        list: [],
        id2List: {
          boxone: 'managers',
          boxtwo: 'selected'
        },
        managers: [],
        searchManager: '',
        searchSelected: '',
    }
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getList = this.getList.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeView = this.changeView.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.filterManagers = this.filterManagers.bind(this);
    this.filterSelector = this.filterSelector.bind(this);
  }
  componentWillMount() {
    ajax({
      url: request(`manager`),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': getToken(),
      }
    }).pipe(
      switchMap(res => res.response.data),
    ).subscribe(
      manager => {
        const list = [...this.state.list, manager]
        this.setState({selected: list, list})
      }
    )
  }
  componentWillReceiveProps(newProps){
    const newManagers = [];
    const newSelected = this.state.list.filter(user => {
      if(newProps.group.managers.indexOf(user.id) !== -1) {
        newManagers.push(user)
        return false
      }
      return true;
    })
    this.setState({ group: newProps.group, selected: newSelected, managers: newManagers })
  }
  getItemStyle(isDragging, draggableStyle) {
    const body = document.body;
    const ofs = (body.clientWidth - 800) / 2;
    if(isDragging) {
      draggableStyle.left = draggableStyle.left - ofs;
    }
    return {
      // some basic styles to make the items look a bit nicer
      userSelect: "none",
      padding: 10,
      margin: `0 0 15px 0`,

      // change background colour if dragging
      background: isDragging ? "#5e72e4" : "white",
      color: isDragging ? "#ffffff" : "#525f7f",
      boxShadow: '0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17)',
      borderRadius: 5,

      // styles we need to apply on draggables
      ...draggableStyle
    }
  }

  getListStyle(isDraggingOver) {
    return {
      background: isDraggingOver ? "lightgrey" : "#eeeeee",
      padding: 10,
      width: '50%',
      display: 'inline-box',
      float: 'left',
      borderRadius: 10,
      maxHeight: 400,
      overflow: 'auto'
    }
  }
  reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }
  getList(droppableID) {
    return this.state[this.state.id2List[droppableID]];
  }
  move(source, destination, droppableSource, droppableDestination) {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  }
  onDragEnd(result) {
    const { source, destination } = result;
    const { group } = this.state;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = this.reorder(
          this.getList(source.droppableId),
          source.index,
          destination.index
      );
      let state = {...this.state, managers: items}
      if (source.droppableId === 'boxtwo') {
        state = {...this.state, selected: items};
      }
      this.setState(state);
    } else {
      const result = this.move(
          this.getList(source.droppableId),
          this.getList(destination.droppableId),
          source,
          destination
      );
      group.managers = result.boxone.map(m => m.id)
      this.setState({ 
        managers: result.boxone,
        selected: result.boxtwo,
        searchManager: '',
        searchSelected: '',
        group
      });
    }
  }
  changeTitle(e) {
    const { group } = this.state;
    group.title = e.target.value;
    this.setState({ group });
  }
  changeView(e) {
    const { group } = this.state;
    group.view = !group.view;
    this.setState({ group });
  }
  createGroup() {
    const { group } = this.state;
    const { saveGroup, toggle } = this.props;
    const parent = group.parent;
    if(typeof saveGroup === 'function') {
      let url = request(`group/create`);
      if(group.id){
        url = request(`group/update`);
      }
      // Сохранение в беке
      ajax({
        url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': getToken(),
        },
        body: {...group, view: group.view ? 1 : 0 }
      })
      .subscribe(
        res => {
          if(res.response.success) {
            saveGroup({...res.response.data, parent})
          } else {
            console.log('Ошибка запроса', res)
            saveGroup(group)
          }
        },
        error => console.log(error)
      )
    } else {
      toggle();
    }
  }
  filterSelector(e){
    // const selected = this.state.selected.filter(manager => manager.firstname.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
    this.setState({ searchSelected: e.target.value });
  }
  filterManagers(e){
    // const managers = this.state.managers.filter(manager => manager.firstname.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
    this.setState({ searchManager: e.target.value });
  }
  render() {
    const { group: { title, view }, searchSelected, searchManager } = this.state;
    const { modal, toggle } = this.props;
    return (
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Новая группа</ModalHeader>
        <ModalBody>
          <div ref={e => this.wrapRef = e}>
            <FormGroup>
              <label
                className="form-control-label"
              >
                Название новой группы
              </label>
              <Input
                className="form-control-alternative"
                value={title}
                onChange={this.changeTitle}
                placeholder="Введите название новой группы"
                type="text"
              />
            </FormGroup>
            <FormGroup check>
              <label
                className="form-control-label"
              >
                <Input
                  className="form-control-alternative"
                  name="view"
                  checked={view}
                  onChange={this.changeView}
                  type="checkbox"
                />
                Показывать в вопросе бота из какого вы города
              </label>
            </FormGroup>
            <hr/>
            <FormGroup check>
              <label
                className="form-control-label"
              >Перетащите менеджера в необходимый блок</label>
            </FormGroup>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="boxone">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={this.getListStyle(snapshot.isDraggingOver)}>
                    <h3>Менеджеры в группе</h3>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Поиск менеджера" value={searchManager} onChange={this.filterManagers} type="text" />
                      </InputGroup>
                    </FormGroup>
                    {this.state.managers.filter(manager => manager.firstname.toLowerCase()
                    .indexOf(searchManager.toLowerCase()) !== -1).map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={`draggableId-${item.id}`}
                        index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={this.getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}>
                            {item.firstname}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="boxtwo">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={this.getListStyle(snapshot.isDraggingOver)}>
                    <h3>Менеджеры вне группы</h3>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Поиск менеджера" value={searchSelected} onChange={this.filterSelector} type="text" />
                      </InputGroup>
                    </FormGroup>
                    {this.state.selected.filter(manager => manager.firstname.toLowerCase()
                    .indexOf(searchSelected.toLowerCase()) !== -1).map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={`draggableId-${item.id}`}
                        index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={this.getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}>
                            {item.firstname}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.createGroup}>Сохранить</Button>{' '}
          <Button color="secondary" onClick={toggle}>Отмена</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default EditGroup;