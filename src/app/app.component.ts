import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Drawflow from './drawflow.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  
  @Input() drawingData: any;
  @Input() locked: boolean = false;
  editor!: any;
  editDivHtml: HTMLElement;
  editButtonShown: boolean = false;
  selectedNodeId: string;
  selectedNode: any = {};
  nodeName:string = '';
  module:string = 'Home';

  nodeModal: ElementRef;
  @ViewChild('content') set setNodeModal(el: ElementRef) {
    this.nodeModal = el;
  }

  @ViewChild("drawflow", { static: false }) drawflow: ElementRef;

  constructor(public renderer: Renderer2,@Inject(PLATFORM_ID) private platformId: Object,) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
     if (isPlatformBrowser(this.platformId)) {
      this.initDrawingBoard();
      this.editor.editor_mode = this.locked != null && this.locked == false ? 'edit' : 'fixed';
    }
  }

  private initDrawFlow(): void {
    
    this.editor = new Drawflow(this.drawflow,this.renderer);
    this.editor.start();
    
    // importing draw
    this.drawingData = {
      "drawflow":{
        "Home":{
          "data":{
            "1":{
              "id":1,
              "name":"welcome",
              "data":{},
              "class":"welcome",
              "html": {
                "type": "object",
                "data": {
                  "title": "👏 Welcome!!",
                  "box": "<p>Simple flow library <b>demo</b>\n        Drawflow optimized for Angular</p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support (in test)<br>\n        ...</p>",
                },
              },
              "typenode": false, 
              "inputs":{},
              "outputs":{},
              "pos_x":50,
              "pos_y":50
            },
            "2":{
              "id":2,
              "name":"slack",
              "data":{},
              "class":"slack",
              "html": {
                "type": "object",
                "data": {
                  "title": "<i class=\"fab fa-slack\"></i> Slack chat message",
                  "box": "",
                },
              },
              "typenode": false, 
              "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},
              "outputs":{},
              "pos_x":1028,
              "pos_y":87
            },
            "3":{
              "id":3,
              "name":
              "telegram",
              "data":{"channel":"channel_2"},
              "class":"telegram",
              "html": {
                "type": "object",
                "data": {
                  "title": "<i class=\"fab fa-telegram-plane\"></i> Telegram bot",
                  "box": "<p>Send to telegram</p>\n              <p>select channel</p>\n              <select df-channel>\n                <option value=\"channel_1\">Channel 1</option>\n                <option value=\"channel_2\">Channel 2</option>\n                <option value=\"channel_3\">Channel 3</option>\n                <option value=\"channel_4\">Channel 4</option>\n              </select>",
                },
              },
              "typenode": false,
              "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},
              "outputs":{},
              "pos_x":1032,
              "pos_y":184
            },
            "4":{
              "id":4,
              "name":"email",
              "data":{},
              "class":"email",
              "html": {
                "type": "object",
                "data": {
                  "title": "<i class=\"fas fa-at\"></i> Send Email",
                  "box": "",
                },
              },
              "typenode": false, 
              "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"}]}},
              "outputs":{},
              "pos_x":1033,
              "pos_y":439
            },
            "5":{
              "id":5,
              "name":"template",
              "data":{"template":"Write your template"},
              "class":"template",
              "html": {
                "type": "object",
                "data": {
                  "title": "<i class=\"fas fa-code\"></i> Template",
                  "box": "Ger Vars\n                <textarea df-template></textarea>\n                Output template with vars",
                },
              },
              "typenode": false, 
              "inputs":{"input_1":{"connections":[{"node":"6","input":"output_1"}]}},
              "outputs":{"output_1":{"connections":[{"node":"4","output":"input_1"},{"node":"11","output":"input_1"}]}},
              "pos_x":607,
              "pos_y":304
            },
            "6":{
              "id":6,
              "name":"github",
              "data":{"name":"https://github.com"},
              "class":"github",
              "html": {
                "type": "object",
                "data": {
                  "title": "<i class=\"fab fa-github \"></i> Github Stars",
                  "box": "<p>Enter repository url</p>\n            <input type=\"text\" df-name>",
                },
              },
              "typenode": false, 
              "inputs":{},
              "outputs":{"output_1":{"connections":[{"node":"5","output":"input_1"}]}},
              "pos_x":341,
              "pos_y":191
            },
            "7":{
              "id":7,
              "name":"facebook",
              "data":{},
              "class":"facebook",
              "html": {
                "type": "object",
                "data": {
                  "title": "<i class=\"fab fa-facebook\"></i> Facebook Message",
                  "box": "",
                }
              },
              "typenode": false, 
              "inputs":{},
              "outputs":{"output_1":{"connections":[{"node":"2","output":"input_1"},{"node":"3","output":"input_1"},{"node":"11","output":"input_1"}]}},
              "pos_x":347,
              "pos_y":87
            },
            "11":{
              "id":11,
              "name":"log",
              "data":{},
              "class":"log",
              "html": {
                "type": "object",
                "data": {
                  "title": "<i class=\"fas fa-file-signature\"></i> Save log file",
                  "box": "",
                },
              },
              "typenode": false, 
              "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"},{"node":"7","input":"output_1"}]}},
              "outputs":{},
              "pos_x":1031,
              "pos_y":363
            }
          }
        },
        "Other":{
          "data":{
            "8":{
              "id":8,
              "name":"personalized",
              "data":{},
              "class":"personalized",
              "html": {
                "type": "string",
                "data": "Personalized", 
              },
              "typenode": false, 
              "inputs":{"input_1":{"connections":[{"node":"12","input":"output_1"},{"node":"12","input":"output_2"},{"node":"12","input":"output_3"},{"node":"12","input":"output_4"}]}},
              "outputs":{"output_1":{"connections":[{"node":"9","output":"input_1"}]}},
              "pos_x":764,
              "pos_y":227
            },
            "9":{
              "id":9,
              "name":"dbclick",
              "data":{"name":"Hello World!!"},
              "class":"dbclick",
              "html": {
                "type": "object",
                "data": {
                  "title": "<i class=\"fas fa-mouse\"></i> Db Click",
                  "box": "",
                },
              },
              "typenode": false, 
              "inputs":{"input_1":{"connections":[{"node":"8","input":"output_1"}]}},
              "outputs":{"output_1":{"connections":[{"node":"12","output":"input_2"}]}},
              "pos_x":209,
              "pos_y":38
            },
            "12":{
              "id":12,
              "name":"multiple",
              "data":{},
              "class":"multiple",
              "html": {
                "type": "object",
                "data": {
                  "title": "",
                  "box": "Multiple!",
                },
              },
              "typenode": false, 
              "inputs":{"input_1":{"connections":[]},"input_2":{"connections":[{"node":"9","input":"output_1"}]},"input_3":{"connections":[]}},
              "outputs":{"output_1":{"connections":[{"node":"8","output":"input_1"}]},"output_2":{"connections":[{"node":"8","output":"input_1"}]},"output_3":{"connections":[{"node":"8","output":"input_1"}]},"output_4":{"connections":[{"node":"8","output":"input_1"}]}},
              "pos_x":179,
              "pos_y":272
            }
          }
        }
      }
    };
    
    if (this.drawingData && Object.keys(this.drawingData.drawflow.Home.data).length > 0) {
      this.editor.import(this.drawingData);
    }

  }

  private initDrawingBoard() {
    this.initDrawFlow();
    if (!this.locked) {
      this.addEditorEvents();
    }
  }

  public allowDrop(ev:Event){
    ev.preventDefault();
  }

  public drag(ev:any,name:string) {
    this.nodeName = name;
    // if (ev.type === "touchstart") {
    //   // mobile_item_selec = ev.target.closest(".drag-drawflow").getAttribute('data-node');
    //   console.log('touchstart')
    // } else {
    //   ev.dataTransfer.setData("node", ev.target.getAttribute('data-node'));
    // }
  }

  public drop(ev:any){
    let x = 0;
    let y = 0;
    if(ev.type == 'touchstart' || ev.type == 'touchmove' || ev.type == 'touchend' || ev.type == 'touchcancel'){
      var touch = ev.originalEvent.touches[0] || ev.originalEvent.changedTouches[0];
      x = touch.pageX; //or touch.clientX
      y = touch.pageY; //or touch.clientY
    } else {
      x = ev.clientX;
      y = ev.clientY;
    }
    
    ev.preventDefault();
    if(x && y){
      this.addNodeToDrawFlow(this.nodeName, x, y);
    }

  }

  private addNodeToDrawFlow(name:string, pos_x:number, pos_y:number) {
    
    if(this.editor.editor_mode === 'edit') {
      
      pos_x = pos_x * ( this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().x * ( this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)));
      pos_y = pos_y * ( this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().y * ( this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)));
      
      switch (name) {
        case 'facebook':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fab fa-facebook"></i> Facebook Message`,
              "box": ""
            }
          };
          this.editor.addNode('facebook', 1,  1, pos_x, pos_y, 'facebook', {}, html );
          break;
        case 'slack':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fab fa-slack"></i> Slack chat message`,
              "box": ""
            }
          };
          this.editor.addNode('slack', 1, 1, pos_x, pos_y, 'slack', {}, html );
          break;
        case 'github':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fab fa-github "></i> Github Stars</div>`,
              "box": `<p>Enter repository url</p><input type="text" df-name>`
            }
          };
          this.editor.addNode('github', 1, 1, pos_x, pos_y, 'github', { "name": ''}, html );
          break;
        case 'telegram':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fab fa-telegram-plane"></i> Telegram bot`,
              "box": `<p>Send to telegram</p>
              <p>select channel</p>
              <select df-channel>
                <option value="channel_1">Channel 1</option>
                <option value="channel_2">Channel 2</option>
                <option value="channel_3">Channel 3</option>
                <option value="channel_4">Channel 4</option>
              </select>`
            }
          };
          this.editor.addNode('telegram', 1, 1, pos_x, pos_y, 'telegram', { "channel": 'channel_3'}, html );
          break;
        case 'aws':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fab fa-aws"></i> Aws Save`,
              "box": `<p>Save in aws</p>
              <input type="text" df-db-dbname placeholder="DB name"><br><br>
              <input type="text" df-db-key placeholder="DB key">
              <p>Output Log</p>`
            }
          };
          this.editor.addNode('aws', 1, 1, pos_x, pos_y, 'aws', { "db": { "dbname": '', "key": '' }}, html );
          break;
        case 'log':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fas fa-file-signature"></i> Save log file`,
              "box": ``
            }
          };
          this.editor.addNode('log', 1, 1, pos_x, pos_y, 'log', {}, html );
          break;
        case 'google':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fab fa-google-drive"></i> Google Drive save`,
              "box": ``
            }
          };    
          this.editor.addNode('google', 1, 1, pos_x, pos_y, 'google', {}, html );
          break;
        case 'email':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fas fa-at"></i> Send Email`,
              "box": ``
            }
          };   
          this.editor.addNode('email', 1, 1, pos_x, pos_y, 'email', {}, html );
          break;
        case 'template':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fas fa-code"></i> Template`,
              "box": `Ger Vars
                <textarea df-template></textarea>
                Output template with vars`
            }
          };
          this.editor.addNode('template', 1, 1, pos_x, pos_y, 'template', { "template": 'Write your template'}, html );
          break;
        case 'multiple':
          var html = {
            "type": "object",
            "data": {
              "title": ``,
              "box": ` Multiple!`
            }
          };
          this.editor.addNode('multiple', 3, 4, pos_x, pos_y, 'multiple', {}, html );
          break;
        case 'personalized':
          var html = {
            "type": "object",
            "data": {
              "title": `Personalized`,
              "box": ``
            }
          };   
          this.editor.addNode('personalized', 1, 1, pos_x, pos_y, 'personalized', {}, html );
          break;
        case 'dbclick':
          var html = {
            "type": "object",
            "data": {
              "title": `<i class="fas fa-mouse"></i> Db Click`,
              "box": `Db Click here`
            }
          };  
          this.editor.addNode('dbclick', 1, 1, pos_x, pos_y, 'dbclick', { name: ''}, html );
          break;

        default:
      }
    }
  }

  public clear(){
    this.editor.clearModuleSelected();
  }

  public changeMode(mode:string){
    this.locked = mode === 'lock' ? true : false;
    this.editor.editor_mode = mode === 'lock' ? 'fixed' : 'edit';
  }

  public zoom(mode:string){
    if(mode === 'out'){
      this.editor.zoom_out();
    }else if(mode === 'reset'){
      this.editor.zoom_reset();
    }else if(mode === 'in'){
      this.editor.zoom_in();
    }
  }

  public changeModule(event: Event,module: string) {
    event.preventDefault();
    
    this.module = module;
    this.editor.changeModule(module);
  }

  private addEditorEvents() {
    // Events!
    this.editor.on('nodeCreated', (id: any) => {
      console.log('Editor Event :>> Node created ' + id, this.editor.getNodeFromId(id));
    });

    this.editor.on('nodeRemoved', (id: any) => {
      console.log('Editor Event :>> Node removed ' + id);
    });

    this.editor.on('nodeSelected', (id: any) => {
      console.log('Editor Event :>> Node selected ' + id, this.editor.getNodeFromId(id));
      this.selectedNode = this.editor.drawflow.drawflow.Home.data[`${id}`];
      console.log('Editor Event :>> Node selected :>> this.selectedNode :>> ', this.selectedNode);
      console.log('Editor Event :>> Node selected :>> this.selectedNode :>> ', this.selectedNode.data);
    });

    this.editor.on('click', (e: any) => {
      console.log('Editor Event :>> Click :>> ', e);

      if (e.target.closest('.drawflow_content_node') != null || e.target.classList[0] === 'drawflow-node') {
        if (e.target.closest('.drawflow_content_node') != null) {
          this.selectedNodeId = e.target.closest('.drawflow_content_node').parentElement.id;
        } else {
          this.selectedNodeId = e.target.id;
        }
        this.selectedNode = this.editor.drawflow.drawflow.Home.data[`${this.selectedNodeId.slice(5)}`];
      }

      if (e.target.closest('#editNode') != null || e.target.classList[0] === 'edit-node-button') {
        // Open modal with Selected Node
        this.open(this.nodeModal, this.selectedNodeId);
      }

      if (e.target.closest('#editNode') === null) {
        this.hideEditButton();
      }
    });

    this.editor.on('moduleCreated', (name: any) => {
      console.log('Editor Event :>> Module Created ' + name);
    });

    this.editor.on('moduleChanged', (name: any) => {
      console.log('Editor Event :>> Module Changed ' + name);
    });

    this.editor.on('connectionCreated', (connection: any) => {
      console.log('Editor Event :>> Connection created ', connection);
    });

    this.editor.on('connectionRemoved', (connection: any) => {
      console.log('Editor Event :>> Connection removed ', connection);
    });

    this.editor.on('contextmenu', (e: any) => {
      console.log('Editor Event :>> Context Menu :>> ', e);

      if (e.target.closest('.drawflow_content_node') != null || e.target.classList[0] === 'drawflow-node') {
        if (e.target.closest('.drawflow_content_node') != null) {
          this.selectedNodeId = e.target.closest('.drawflow_content_node').parentElement.id;
        } else {
          this.selectedNodeId = e.target.id;
        }
        this.selectedNode = this.editor.drawflow.drawflow.Home.data[`${this.selectedNodeId.slice(5)}`];

        this.showEditButton();
      }
    });

    this.editor.on('zoom', (zoom: any) => {
      console.log('Editor Event :>> Zoom level ' + zoom);
    });

    this.editor.on('addReroute', (id: any) => {
      console.log('Editor Event :>> Reroute added ' + id);
    });

    this.editor.on('removeReroute', (id: any) => {
      console.log('Editor Event :>> Reroute removed ' + id);
    });

    // this.editor.on('mouseMove', (position: any) => {
    //   console.log('Editor Event :>> Position mouse x:' + position.x + ' y:' + position.y);
    // });

    // this.editor.on('nodeMoved', (id: any) => {
    //   console.log('Editor Event :>> Node moved ' + id);
    // });

    // this.editor.on('translate', (position: any) => {
    //   console.log(
    //     'Editor Event :>> Translate x:' + position.x + ' y:' + position.y
    //   );
    // });
  }

  private showEditButton() {
    this.editButtonShown = true;
    this.editDivHtml = this.renderer.createElement('div');
    this.editDivHtml.id = 'editNode';
    this.editDivHtml.innerHTML = '<i class="fas fa-pen"></i>';
    this.editDivHtml.style.display = 'block';
    this.editDivHtml.style.position = 'absolute';
    this.editDivHtml.className = 'edit-node-button';

    const selectedNodeHtml:any = document.getElementById(this.selectedNodeId);
    selectedNodeHtml.append(this.editDivHtml);
  }

  private hideEditButton() {
    this.editButtonShown = false;
    this.editDivHtml = document.getElementById('editNode')!;
    if (this.editDivHtml) {
      this.editDivHtml.remove();
    }
  }

  open(content: any, nodeId: string) {
    this.hideEditButton();

    const oldNodeIdNumber = parseInt(nodeId.slice(5));
    this.selectedNode = this.editor.drawflow.drawflow.Home.data[`${oldNodeIdNumber}`];
    console.log('node select',this.selectedNode)
    
  }

}