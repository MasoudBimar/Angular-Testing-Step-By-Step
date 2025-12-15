import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, Observable, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);


  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1, 2, 3];
    // we want to chnage the implementation of get service
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    }); // we get control over a method in a class

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    let todos = [1, 2, 3];
    // we want to chnage the implementation of get service
    let spy = spyOn(service, 'add').and.callFake(t => {
      return from([]);
    }); // we get control over a method in a class

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo item returned from the server', () => {
    let todo = { id : 1 };
    // we want to chnage the implementation of get service
    let spy = spyOn(service, 'add').and.callFake(t => {
      return from([todo]);
    }); // we get control over a method in a class

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should add new todo item returned from the server (cleaner way)', () => {
    let todo = { id : 1 };
    // we want to chnage the implementation of get service
    let spy = spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property if server return an error when adding a new todo', () => {
    let errorMessage = 'error from the server';
    // we want to chnage the implementation of get service
    let spy = spyOn(service, 'add').and.returnValue(throwError(errorMessage));

    component.add();

    expect(component.message).toBe(errorMessage);
  });

  it('should call the server to delete todo item if the user confirms', () => {

    spyOn(window, 'confirm').and.returnValue(true);

    let spy = spyOn(service, 'delete').and.returnValue(from([]));

    component.delete(1);

    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should Not call the server to delete todo item if the user cancels', () => {

    spyOn(window, 'confirm').and.returnValue(false);

    let spy = spyOn(service, 'delete').and.returnValue(from([]));

    component.delete(1);

    // expect(spy).toHaveBeenCalled();
    expect(spy).not.toHaveBeenCalled();
  });
});

