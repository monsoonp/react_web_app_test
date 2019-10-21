import React, {useState, useEffect} from "react";
//import * as ReactDOM from "react-dom";
//import { DiagramComponent, SnapConstraints,NodeConstraints, ConnectorConstraints } from "@syncfusion/ej2-react-diagrams";// AnnotationConstraints, DiagramConstraints, 
//import { HierarchicalTree, Inject, DataBinding } from "@syncfusion/ej2-react-diagrams";
//import { DataManager } from "@syncfusion/ej2-data";
//import useDebounce from 'utils/useDebounce';
import Diagram from 'pages/Diagram';

const MainDiagram = (props) =>{
    const [nodes, setNodes] = useState([]);
    const [nodeList, setNodeList] = useState([]);
    const [connectors, setConnectors] = useState([]);
    const [connectorList, setConnectorList] = useState([]);
    
    /*
    const ChangeLine = (obj, node) => {
        if(props.check){
            switch(props.check.choice){
                case 'source':
                    return obj.sourceID !== node;
                case 'target':
                    return obj.targetID !== node;
                case 'both':
                    return obj.sourceID !== node && obj.targetID !== node;
                default :
                    return true;
            }
        }
        //console.log(props.check);
    }
    */
    // Basic - Rectangle, Ellipse, Triangle, Plus, Star, Pentagon, Heptagon, Octagon, Trapezoid, Decagon, RightTriangle, Parallelogram
    // Flow -  Terminator, Process, Decision, Document, PredefinedProcess, PapeTape, DirectData, directData, Sort Multi-Document, Collate, SummingJunction, Or, 
    //          Internal Storage, Extarct, ManualOperation, Merge, Off-PageReference, SequentialAccessStrage, Data, Card
    const bindNode = (node) => {
        //console.log(node);
        if(node){
            setNodes(
                node.map(e => {
                    return(
                        {
                            id: String(e.id),
                            shape: (e.shape===null) ? {type:"Basic", shape:"Ellipse"} : e.shape,
                            annotations: [
                                { content: "node"+String(e.id) }
                            ],
                            grade: e.grade,
                            locate: e.locate
                        }

                    )
                })
            );
            setNodeList(nodes);
        }
    }
    const bindConn = (conn) => {
        //console.log(conn);
        if(conn){
            setConnectors(
                conn.map(e => {
                    return(
                        {
                            id: ("connector"+String(e.id)),
                            sourceID: e.sourceId,
                            targetID: e.targetId,
                            role: e.role
                            //annotations: [{ text: e.role }],
                            //labels: [{ text: e.role }],
                        }
                    );
                })
                //conn.filter(e => {return( {id:String(e.id), sourceID: e.sourceId, targetID: e.targetId, role: e.role})})
            )
            setConnectorList(connectors);            
        }
    }
    useEffect(()=> {
        //setNodeList(props.node);
        //console.log(props);
        
        if(!nodeList.length && !connectorList.length){
            bindNode(props.node);
            bindConn(props.conn);
        }
    
            
        return () => {
            console.log("base unmount");
        }
        
    },[props]);
    
    return(
        <Diagram node={nodeList} conn={connectors} check={props.check}/>
    );
    
}
export default MainDiagram;
/*
<DiagramComponent id="diagram" width={"100%"} height={"100%"} nodes={nodeList} connectors={connectorList}
    //pageSettings={{constraints: 'Infinity'}}
    getNodeDefaults={(node) => {    // node4_groupElement Dom 이름
        
        node.offsetY = node.grade*120;
        node.offsetX = node.locate*120;
       
        node.height = 50;
        node.width = (node.shape.shape==='Ellipse')? 50 : 80;
        //node.offsetX = node.offsetX+200;
        if(node.id === props.check){
            node.style.fill = "skyblue";
        }else{
            node.style.fill = "pink";
        }
        node.constraints =  NodeConstraints.ReadOnly | NodeConstraints.InConnect | NodeConstraints.OutConnect;   // 노드
        //node.annotations.constraints = AnnotationConstraints.ReadOnly;  // 노드 내부
        //console.log(node);
        return node;
    }} 
    getConnectorDefaults={(obj) => {
        obj.type = "Orthogonal";
        obj.targetDecorator.shape = 'None';   // 화살표 없애기
        
        if(ChangeLine(obj, props.check.checked)){
            obj.style = {
                strokeColor: 'red', // 선 색상
                strokeWidth: 2,
            };
            //console.log("source: '%s', target: '%s'", obj.sourceID, obj.targetID);
        }else{
            obj.style = {
                strokeColor: 'blue', // 선 색상
                strokeWidth: 2,
            };
        }
        obj.constraints = ConnectorConstraints.ReadOnly;    // 커넥터
       
        console.log(obj);
        return obj;
       
    }}
    snapSettings = {
        {constraints: SnapConstraints.SnapToLines}  //배경 지우기
    }

    //constraints = { DiagramConstraints.Zoom}    //줌만 가능
/>
    //DiagramConstraints
    //ApiUpdate, Bridging, Default, LineRouting, None, PageEditable, Pan, PanX, PanY, Tooltip, UndoRedo, UserInteraction, Virtualization, Zoom, ZoomTextEdit
*/