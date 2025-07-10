export class Tag {
    static readonly ANGULAR = new Tag('Angular','#752313');
    static readonly TYPESCRIPT = new Tag('TypeScript','#d64161');
    static readonly PYTHON = new Tag('Python','#82b74b');
    static readonly CSHARP = new Tag('C#','green');
    static readonly JAVA = new Tag('Java','orange');
    static readonly NODEJS = new Tag('Node.JS','#083321');
    static readonly ASPNET = new Tag('ASP.NET','gray');
    static readonly JAVASCRIPT = new Tag('JavaScript','purple');
    static readonly REACT = new Tag('React','blue');
    static readonly HTML = new Tag('Html','violet');
    static readonly CSS = new Tag('CSS','red');

    private constructor(private readonly key: string, public readonly color:string){

    }

    toString(){
        return this.key;
    }
}