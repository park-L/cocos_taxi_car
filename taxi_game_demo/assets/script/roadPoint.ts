import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

enum ROAD_POINT_TYPE{
    NORMAL=1,
    START,
    GREETING,GOODBYE,
    END,AI_START
}

enum ROAD_MOVE_TYPE{
    LINE=1,
    CURVE
}

@ccclass("roadPoint")
export class roadPoint extends Component {
@property({type:ROAD_POINT_TYPE})

}
