//IMPORTS------------------------------//
import * as app from "../JS/App";
import * as math from "../JS/math";
//IMPORTS------------------------------//  

//TEST---------------------------------//
test("calls math.add", () => {
  //Se le asigna a la constante originAdd la funcion add de math
  const originalAdd = math.add;

  //Se crea el MOCK con la implementacion de originalAdd
  math.add = jest.fn(originalAdd);

  //Comprueba que el resultado de doAdd sea 3
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);

  //Se suscribe todas las implementaciones reasignando las funciones anteriores a la del MOCK
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);

  //Restaura la funcion original
  //Comprueba que el resultado de doAdd sea 3
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});
//TEST---------------------------------//