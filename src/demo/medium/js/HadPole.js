import {HadObjClass} from "./HadObjClass";
class HadPole extends HadObjClass{
  constructor(pbfdata){
    super(pbfdata)
    this.type="had_object_pole"
    this.style={
      color:Cesium.Color.CORNSILK,
      width:1,
      alpha:1
    }
  }
  generateInstance(lineStringArray){

  }
  getGeom(){
    console.log(this.pbfdata)
      var geometryInstanceArray=[]
      var lineStringArray
      //遍历获取图幅中的所有link数量

      this.pbfdata.objectList.map(v =>{
        lineStringArray = new Array();
        //遍历取出每条link的坐标，并添加高程
        v.geometry.linestringList.map(v2 => {
          lineStringArray.push(v2.longitude);
          lineStringArray.push(v2.latitude);
          lineStringArray.push(v2.elevation);

        })
       let pr= this.getGeometryInstance(lineStringArray)
        geometryInstanceArray.push(pr)
      })
      return geometryInstanceArray



  }
  render(){
    var pr=  viewer.scene.primitives.add(new Cesium.Primitive({
      geometryInstances : this.getGeom(),
      appearance : new Cesium.PolylineMaterialAppearance({
        material : Cesium.Material.fromType("Color", {
          color : this.style.color
        })
      }),
    }))
    pr.layerType="had_object_pole"
  }


}
export {HadPole}
