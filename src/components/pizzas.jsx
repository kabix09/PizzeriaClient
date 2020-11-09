const { Component } = require("react");
import Pizza from "./pizza";

class Pizzas extends Component{

    constructor()
    {
        super();
        this.state={
            pizzas: this.fetchPizzasData()
        }
    }

    fetchPizzasData()
    {
        const url = "http://localhost:3333/api/pizza";
        const pizzaApi = '[{"id":"86d768d5-2dc1-4ef9-8664-f19185709a80","name":"MARGHERITA","price":15,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7"]},{"id":"392f2133-0480-4485-9859-be403c5dfd24","name":"FUNGHI","price":16,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7","6cca77fb-6d70-42a6-ac92-eb6776214b3d"]},{"id":"e5808faa-e8f2-4ee7-aee0-73d09e4b8fac","name":"VESUVIO","price":17,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7","ff29c65a-b9c8-4420-98a6-e5238e867fb2"]},{"id":"a713177d-767f-41ef-a854-9ad9a4d2f224","name":"SALAMI","price":17,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7","c1dca9bc-17ae-45ff-864a-45ab1ad43a2d"]},{"id":"766b7b6f-0bca-4164-9c65-60660877c3b6","name":"CAPRICCIOSA","price":20,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7","6cca77fb-6d70-42a6-ac92-eb6776214b3d","ff29c65a-b9c8-4420-98a6-e5238e867fb2"]},{"id":"849cab46-691b-443c-86ce-94b93c73ee26","name":"HAWAJSKA","price":20,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7","ff29c65a-b9c8-4420-98a6-e5238e867fb2","3dae0ef0-7de0-4781-94f5-6c7878295c99"]},{"id":"1285a82c-e381-4cc8-8736-1f262d6061fa","name":"VERONA","price":21,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7","c1dca9bc-17ae-45ff-864a-45ab1ad43a2d","3dae0ef0-7de0-4781-94f5-6c7878295c99"]},{"id":"8e5573e2-cbea-454a-95fa-0fba7a9f593f","name":"ROMA","price":22,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7","c1dca9bc-17ae-45ff-864a-45ab1ad43a2d","73ef1c4e-131b-4803-8fa3-9a001288927a","57e20524-2a83-40c8-b28f-ab62c4bfb678"]},{"id":"efd963c0-614b-4e05-bf85-c31cd3141e7f","name":"COLOSSEUM","price":22,"ingredients":["054ee54c-2f64-4cc3-b372-8a1ea244f591","0580ffa9-b8ec-4c99-b756-acf75e57adb7","6cca77fb-6d70-42a6-ac92-eb6776214b3d","ff29c65a-b9c8-4420-98a6-e5238e867fb2","733f7f3c-dea6-436f-a883-0f8e8b5efa3a","73ef1c4e-131b-4803-8fa3-9a001288927a"]}]';
        
        return JSON.parse(pizzaApi);
    }

    render()
    {
        return (
            <div>
                {
                    this.state.pizzas.map(
                        element => <Pizza key={element.id} pizza={element}/>  
                    )
                }
            </div>
            
        );
    };
}

export default Pizzas;