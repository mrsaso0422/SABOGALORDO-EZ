import { postData,putData, opc } from "./registro.js";
export class mainBody extends HTMLElement {
    constructor() {
      super();
      this.render();
      this.saveData();
    }
    render() {
      this.innerHTML = `
      <div class="container id="container">
        <div class="sub-container" id = "sub-container">
          <div class="titulo">
            <h1>Registro de Reclutas</h1>
          </div>
          <div class="items">
            <label for="createdAt" class="categoria">Fecha registro</label>
            <input type="date" class="form-control" id="createdAt" name="createdAt">
          </div>
          <div class="items">
            <label for="nombres" class="categoria">Nombre Completo</label>
            <input type="text" class="form-control" id="nombres" name="nombres">
          </div>
          <div class="items">
            <label for="telefono" class="categoria">Telefono</label>
            <input type="text" class="form-control" id="telefono" name="telefono">
          </div>
          </divtelefono <div class="row g-3">
          <div class="items">
            <label for="email" class="categoria">Email </label>
            <input type="email" class="form-control" id="email" name="email">
          </div>
          <div class="items">
            <label for="fNacimiento" class="categoria">Fecha de Nacimiento</label>
            <input type="date" class="form-control" id="fNacimiento" name="fNacimiento">
          </div>
          <div class="items">
            <label for="idTribu" class="categoria">id Team</label>
            <input type="text" class="form-control" id="idTribu" name="idTribu">
          </div>
          <div class="boton">
          <button type="submit" class="btn btn-dark" id="Guardar"> Registrar</button>

          </div>
        </div>
      `
    }
    


    saveData = () =>{
      let MyForm = document.querySelector("#sub-container");
      MyForm.addEventListener("submit", (e) =>{
        let data = Object.fromEntries(new FormData(e.target));
        opc[e.submitter.dataset.accion](data)
        e.preventDefault();
      })
      
  ;
  }
  }
  customElements.define("main-body", mainBody);
  