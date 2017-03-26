export interface Select {
  id:string,
  text:{
    size:any,
    align:any,
    color:any,
  },
  style:{
    width:any,
    height:any,
    padding:any,
    margin:any,

    class:any
  },
  options:Array<{value: string, text: string}>,

  script:any
}
