export class MineMEnu extends HTMLElement{
    constructor(){
        super();
        this.render();
        this.Guardar;
    }
    render(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html">tower zenith</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/components/registro/index.html">Registro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">campers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">teams</a>
                    </li>
            
                    </ul>
                </div>
            </div>
        </nav>
        
        `
    }
}
customElements.define("main-menu", MineMEnu);

const opc = {
    "GET": () => getDataAll(),
    "PUT": (data) => PutData(data),
    "DELETE": (data) =>deleteData(data),
    "SEARCH": (data) =>SearchData(data),
    "POTS": (data) =>PostData(data)
}

let config = {
    Headers:new Headers({
        "Content-Type": "application/json"
    }),
};
const getDataAll = async() =>{
    config.method = "GET ";
    let res = await (await fetch("http://localhost:3000/registro",config).json() );
    console.log(res);
}
const postData = async(data) =>{
    config,method = "POST";
    config.body = JSON.stringify(data);
    let res = await (await fetch("http://localhost:3000/registro",config).json() );
    console.log(res);
}
const putData = async(data)=>{
    config.method = "PUT";
    config.body = JSON.stringify(data);
    let res = await (await fetch('http://localhost:3000/registro)',config).json() );
    console.log(res);
} 
const deleteData = async(data) =>{
    config.method = "DELETE";
    config.body = JSON.stringify(data);
    let res = await (await fetch('http://localhost:3000/registro)',config).json() );
    console.log(res);
}
const searchData = async(data) =>{
    config.method = "GET";
    config.body = JSON.stringify(data);
    let res = await (await fetch('http://localhost:3000/registro/=${object.value(data).join("")})',config).json() );
    console.log(res);
}

export{
    getDataAll,
    postData,
    putData,
    deleteData,
    searchData,
    opc
}


