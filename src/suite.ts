import Test from "./test";

export default class Suite {
    id:string = new Date().toLocaleString()
        .replace(/\//g, '-')
        .replace(/, /,'-')
        .replace(/ /g,'')
        .replace(/:/g,'-');
    totaltests:number = 0;
    totalpass:number = 0;
    totalfail:number = 0;
    totalsteps:number = 0;
    tests:Array<Test> = new Array<Test>();
    starttime:string = new Date().toISOString();
    endtime:string = new Date().toISOString();
    title:string = 'Execution Results';
}
