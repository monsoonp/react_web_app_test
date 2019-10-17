import * as React from "react";
//import * as ReactDOM from "react-dom";
import { DiagramComponent, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
import { Inject, HierarchicalTree, DataBinding } from "@syncfusion/ej2-react-diagrams";
import { DataManager } from "@syncfusion/ej2-data";

MainDiagram.defaultProps = {
    test : "Tester",
}
function MainDiagram(props) {
        
    let data = [
        {
            Name: "Elizabeth",
            Role: "Director"
        },
        {
            Name: `${props.test}`,
            Role: "Director"
        },
        {
            Name: "Yang",
            ReportingPerson: "Elizabeth",
            Role: "Manager"
        },
        {
            Name: "Christina",
            ReportingPerson: ["Elizabeth",`${props.test}`],
            Role: "Manager"
        },
        {
            Name: "Roland",
            ReportingPerson: "Yang",
            Role: "Lead"
        },
        {
            Name: "Yvonne",
            ReportingPerson: ["Yang","Christina"],
            Role: "Lead"
        },
        {
            Name: "Yoshi",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
        {
            Name: "Philip",
            ReportingPerson: "Christina",
            Role: "Lead"
        },
    ];
    let dataSettings = {
        id: "Name",
        parentId: "ReportingPerson",
        dataManager: new DataManager(data),
        doBinding: (nodeModel, data, diagram)=>{
            nodeModel.shape = {
                shape:{
                    type: 'Flow',
                    shape: 'Triangle',
                }
            }
            /*
            nodeModel.annotations = [{
                //tslint:disable:no-string-literal
                content: data['Name'],
                margin: {
                    top: 10,
                    left: 10,
                    right: 10,
                    bottom: 0
                },
                style: {
                    color: 'black'
                }
            }];
            */
        }
    };
    let layoutSetting = { type: "HierarchicalTree" };   // OrganizationalChart
    let snapSettings = {
        constraints: SnapConstraints.SnapToLines,
    };
    
    return(
        <DiagramComponent id="diagram" width={"100%"} height={"100%"} dataSourceSettings={dataSettings} layout={layoutSetting} 
            getNodeDefaults={(node) => {
                let codes = {
                    Director: "rgb(0, 139,139)",
                    Manager: "rgb(30, 30,113)",
                    Lead: "rgb(0, 100,0)"
                };
                let variables = { 
                    Director: { style:{color:"red"}, shape: "Parallelogram" },
                    Manager: { style:{color:"yellow"}, shape: "Rectangle"} ,
                    Lead: { style:{color:"white"}, shape: "Ellipse" },
                }
                node.shape={        // Basic - Rectangle, Ellipse, Triangle, Plus, Star, Pentagon, Heptagon, Octagon, Trapezoid, Decagon, RightTriangle, Parallelogram
                    type: "Basic",  // Flow -  Terminator, Process, Decision, Document, PredefinedProcess, PapeTape, DirectData, directData, Sort Multi-Document, Collate, SummingJunction, Or, Internal Storage, Extarct, ManualOperation, Merge, Off-PageReference, SequentialAccessStrage, Data, Card
                    shape: variables[node.data.Role].shape,
                };
                node.width = 70;
                node.height = 30;
                node.annotations = [
                    { content: node.data.Name, ...variables[node.data.Role] }
                ];
                node.style.fill = codes[node.data.Role];
                return node;
            }} 
            getConnectorDefaults={(connector) => {
                let codes = {
                    Director: "rgb(0, 139,139)",
                    Manager: "rgb(30, 30,113)",
                    Lead: "rgb(0, 100,0)"
                };
                connector.style = {
                    strokeColor: 'tan', // 선 색상
                    strokeWidth: 2,
                };
                console.log(connector);
                //connector.targetDecorator.style.strokeColor = 'grey';
                connector.targetDecorator.style.fill = 'black'; // 화살표 색상
                connector.targetDecorator.style.width = 5;
                connector.targetDecorator.shape = 'None';   // 화살표 없애기
                connector.type = "Orthogonal"; // Straight // 선 모양 
                connector.cornerRadius = 7;
                return connector;
            }}
            snapSettings={snapSettings}
        >
            <Inject services={[HierarchicalTree, DataBinding]}/>
        </DiagramComponent>
    );

}
export default MainDiagram;