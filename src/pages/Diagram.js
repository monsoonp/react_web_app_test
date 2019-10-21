import React, {useLayoutEffect , useState, useMemo} from "react";
//import * as ReactDOM from "react-dom";
import { DiagramComponent, SnapConstraints,NodeConstraints, ConnectorConstraints } from "@syncfusion/ej2-react-diagrams";// AnnotationConstraints, DiagramConstraints, 
//import { HierarchicalTree, Inject, DataBinding } from "@syncfusion/ej2-react-diagrams";
//import { DataManager } from "@syncfusion/ej2-data";
//import useDebounce from 'utils/useDebounce';

const Diagram = (props) =>{
    const {check} = props;
    //console.log(check);
    const ChangeLine =(obj, node) => {
        console.log(node);
        if(node){
            switch(node.choice){
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
    };
    
    // Basic - Rectangle, Ellipse, Triangle, Plus, Star, Pentagon, Heptagon, Octagon, Trapezoid, Decagon, RightTriangle, Parallelogram
    // Flow -  Terminator, Process, Decision, Document, PredefinedProcess, PapeTape, DirectData, directData, Sort Multi-Document, Collate, SummingJunction, Or, 
    //          Internal Storage, Extarct, ManualOperation, Merge, Off-PageReference, SequentialAccessStrage, Data, Card
        
    useLayoutEffect (()=> {
        //setNodeList(props.node);
        console.log(props);
        
        return () => {
            console.log("diagram_unmount");
            
        }
        
    },[props, ]);

    return(
    
        <DiagramComponent id="diagram" width={"100%"} height={"100%"} nodes={props.node} connectors={props.conn}
            //pageSettings={{constraints: 'Infinity'}}
            getNodeDefaults={(node) => {    // node4_groupElement Dom 이름
                
                node.offsetY = node.grade*120;
                node.offsetX = node.locate*120;
               
                node.height = 50;
                node.width = (node.shape.shape==='Ellipse')? 50 : 80;
                //node.offsetX = node.offsetX+200;
                if(node.id === check.checked){
                    node.style.fill = "skyblue";
                }else{
                    node.style.fill = "pink";
                }
                node.constraints =  NodeConstraints.ReadOnly | NodeConstraints.InConnect | NodeConstraints.OutConnect;   // 노드
                //node.annotations.constraints = AnnotationConstraints.ReadOnly;  // 노드 내부
                console.log(node);
                //return node;
            }} 
            getConnectorDefaults={(obj) => {
                obj.type = "Orthogonal";
                obj.targetDecorator.shape = 'None';   // 화살표 없애기
                
                if(ChangeLine(obj, check)){
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
                /*
                segments: [
                    { length: 30, direction: "Left" },
                    { length: 200, direction: "Bottom" }
                ]
                */
                console.log(obj);
                //return obj;
               
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
export default Diagram;