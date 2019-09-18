import { Component, OnInit } from '@angular/core';
export class Task {
  id: number;
  name: string;
  imgUrl: string;
  orderName: string;
  orderCode: string;
  subTime: string;
  orgName: string;
  money: number;
}

@Component({
  selector: 'lib-widget-task',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class WidgetTaskComponent implements OnInit {

  title = 'tasks';
  types: string[] = [
    '报销单审批',
    '审核销售订单·8',
    '手机费稽查·9',
    '采购请购单·3',
    '销售发货计划·5' ];

  tasks: Task[] = [
    {id: 1, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请',orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 },
     {id: 2, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请',orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 },
     {id: 3, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请',orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 },
     {id: 4, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请',orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 },
     {id: 5, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请',orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
