import * as React from "react";
//import * as ReactDOM from "react-dom";
import { DiagramComponent, SnapConstraints, AnnotationConstraints, DiagramConstraints, NodeConstraints, ConnectorConstraints } from "@syncfusion/ej2-react-diagrams";
//import { HierarchicalTree, Inject, DataBinding } from "@syncfusion/ej2-react-diagrams";
//import { DataManager } from "@syncfusion/ej2-data";

const MainDiagram = (props) =>{

    let nodes = [
        {
            id: "node1",
            offsetY: 50,
            role: "tl",
            annotations: [
                {
                    content: "node1"
                }
            ]
        },
        {
            id: "node2",
            offsetY: 140,
            shape: { type: "Basic", shape: "Ellipse" },
            annotations: [
                {
                    content: "node2"
                }
            ]
        },
        {
            id: "node3",
            offsetY: 230,
            shape: { type: "Flow", shape: "Decision" },
            annotations: [
                {
                    content: "node3"
                }
            ]
        },
        {
            id: "node4",
            offsetX: 200,
            offsetY: 320,
            shape: { type: "Flow", shape: "PreDefinedProcess" },
            annotations: [
                {
                    content: 'node4'
                }
            ]
        },
        {
            id: "node5",
            offsetX: 200,
            offsetY: 410,
            shape: { type: "Flow", shape: "Process" },
            annotations: [
                {
                    content: "node5"
                }
            ]
        },
        {
            id: "node6",
            offsetY: 500,
            //shape: { type: "Flow", shape: "Terminator" },
            shape: { type: "Basic", shape: "Ellipse" },
            annotations: [
                {
                    content: "node6"
                }
            ]
        }
    ];
    let connectors = [
        {
            id: "connector1",
            sourceID: "node1",
            targetID: "node2"
        },
        {
            id: "connector2",
            sourceID: "node2",
            targetID: "node3"
        },
        {
            id: "connector3",
            sourceID: "node3",
            targetID: "node4",
            annotations: [{ text: "Yes" }]
        },
        {
            id: "connector4",
            sourceID: "node3",
            targetID: "node6",
            labels: [{ text: "No" }],
            segments: [
                { length: 30, direction: "Right" },
                { length: 300, direction: "Bottom" }
            ]
        },
        {
            id: "connector5",
            sourceID: "node4",
            targetID: "node5"
        },
        {
            id: "connector6",
            sourceID: "node5",
            targetID: "node3",
            segments: [
                { length: 30, direction: "Left" },
                { length: 200, direction: "Bottom" }
            ]
        }

    ];
    const ChangeLine = (obj, node) => {
        if(props.check){
            if(obj && node){
                return obj.sourceID !== node && obj.targetID !== node;
            }else{
                return true;
            }
            //console.log(props.check);
        }
    }
    // Basic - Rectangle, Ellipse, Triangle, Plus, Star, Pentagon, Heptagon, Octagon, Trapezoid, Decagon, RightTriangle, Parallelogram
    // Flow -  Terminator, Process, Decision, Document, PredefinedProcess, PapeTape, DirectData, directData, Sort Multi-Document, Collate, SummingJunction, Or, 
    //          Internal Storage, Extarct, ManualOperation, Merge, Off-PageReference, SequentialAccessStrage, Data, Card
    return(
        <DiagramComponent id="diagram" width={"100%"} height={"100%"} nodes={nodes} connectors={connectors} 
            //pageSettings={{constraints: 'Infinity'}}
            getNodeDefaults={(node) => {    // node4_groupElement Dom 이름
                const role = {"tl": {shape:'Decision'}};
                
                if(node.role){
                    //console.log(role[node.role]);
                    node.shape = { 
                        type: "Flow", 
                        shape: role[node.role].shape 
                    };
                    node.style = {
                        strokeColor: "tan", //테두리
                        fill: 'white',   //배경
                    };
                    
                };
                node.height = 50;
                node.width = (node.shape.shape==='Ellipse')? 50 : 80;
                node.offsetX = node.offsetX+200;
                if(node.id === props.check){
                    node.style.fill = "skyblue";
                }else{
                    node.style.fill = "pink";
                }
                node.constraints =  NodeConstraints.ReadOnly | NodeConstraints.InConnect | NodeConstraints.OutConnect;   // 노드
                //node.annotations.constraints = AnnotationConstraints.ReadOnly;  // 노드 내부
                return node;
            }} 
            getConnectorDefaults={(obj) => {
                obj.type = "Orthogonal";
                obj.targetDecorator.shape = 'None';   // 화살표 없애기
                //console.log(obj.targetID);
               
                if(ChangeLine(obj, props.check)){
                    obj.style = {
                        strokeColor: 'red', // 선 색상
                        strokeWidth: 2,
                    };
                    console.log("source: '%s', target: '%s'", obj.sourceID, obj.targetID);
                }else{
                    obj.style = {
                        strokeColor: 'blue', // 선 색상
                        strokeWidth: 2,
                    };
                }
                obj.constraints = ConnectorConstraints.ReadOnly;    // 커넥터
               
            }}
            snapSettings = {
                {constraints: SnapConstraints.SnapToLines}  //배경 지우기
            }
            //constraints = { DiagramConstraints.Zoom}    //줌만 가능
        />
            //DiagramConstraints
            //ApiUpdate, Bridging, Default, LineRouting, None, PageEditable, Pan, PanX, PanY, Tooltip, UndoRedo, UserInteraction, Virtualization, Zoom, ZoomTextEdit
            
    );

}
export default MainDiagram;