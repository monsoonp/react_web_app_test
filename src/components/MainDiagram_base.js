import React, {useState, useEffect, useMemo} from "react";
//import * as ReactDOM from "react-dom";
//import { DiagramComponent, SnapConstraints,NodeConstraints, ConnectorConstraints } from "@syncfusion/ej2-react-diagrams";// AnnotationConstraints, DiagramConstraints, 
//import { HierarchicalTree, Inject, DataBinding } from "@syncfusion/ej2-react-diagrams";
//import { DataManager } from "@syncfusion/ej2-data";
//import useDebounce from 'utils/useDebounce';
import Diagram from 'pages/Diagram';

const MainDiagram = (props) =>{
    const [nodes, setNodes] = useState([]);
    //const [nodeList, setNodeList] = useState([]);
    const nodeList = useMemo(()=> nodes,[nodes]);
    const [connectors, setConnectors] = useState([]);
    //const [connectorList, setConnectorList] = useState([]);
    const connectorList = useMemo(() => connectors, [connectors]);
    const change = useMemo(()=> props.check,[props.check]);
    
    const ChangeLine = (obj, node) => {
        switch(props.check.choice){
            case 'source':
                return obj.sourceId !== node;
            case 'target':
                return obj.targetId !== node;
            case 'both':
                return obj.sourceId !== node && obj.targetId !== node;
            default :
                return true;
        }
    }
    
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
                            //grade: e.grade,
                            //locate: e.locate
                            offsetX : e.locate*120,
                            offsetY : e.grade*120,
                            style:{fill: (String(e.id)===props.check.checked)? "skyblue":"pink"},
                            height: 50,
                            width: e.shape===null? 50:80
                        }

                    )
                })
            );
            //setNodeList(nodes);
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
                            role: e.role,
                            style: {
                                strokeColor: ChangeLine(e,props.check.checked)?"red":"blue",
                                strokeWidth: 2
                            }
                            //annotations: [{ text: e.role }],
                            //labels: [{ text: e.role }],
                        }
                    );
                })
                //conn.filter(e => {return( {id:String(e.id), sourceID: e.sourceId, targetID: e.targetId, role: e.role})})
            )
            //setConnectorList(connectors);            
            console.log(connectorList);
        }
    }

    useEffect(()=> {
        //console.log(props);
        //setConnectors([]);
        if(!nodeList.length && !connectorList.length){
            bindNode(props.node);
            bindConn(props.conn);
        }else if(change.choice){
            //bindNode(props.node);
            bindConn(props.conn);
        }
       
        return () => {
            console.log("base unmount");
        }
        
    },[props.conn,change]);
    
    return(
        <Diagram node={nodeList} conn={connectorList} check={props.check}/>
    );
    
}
export default MainDiagram;