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
  style: number;
}
export class Type {
  name: string;
  total: number;
}

@Component({
  selector: 'lib-widget-task',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class WidgetTaskComponent implements OnInit {
  style = 0;
  types: Type[] = [
    {name: '报销单审批', total: 5},
    {name: '审核销售订单', total: 4},
    {name: '手机费稽查', total: 4},
    {name: '采购请购单', total: 1},
    {name: '销售发货计划', total: 0}];
  tasks: Task[] = [
    {id: 1, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000, style: 0  },
     {id: 2, name: '张小敬',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000, style: 0 },
     {id: 3, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000, style: 0 },
     {id: 4, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000, style: 0},
     {id: 5, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 , style: 0},
     {id: 6, name: '张小敬',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000, style: 1  },
     {id: 7, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000, style: 1},
     {id: 8, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000, style: 1 },
     {id: 99, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000, style: 1},
     {id: 10, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 , style: 2},
     {id: 11, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 , style: 2},
     {id: 12, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 , style: 2},
     {id: 13, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 , style: 2},
     {id: 14, name: '魏小鱼',
     imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669496880,3827964645&fm=26&gp=0.jpg', 
     orderName: '交通费报销单申请', orderCode: 'JT20190917088', subTime: '2019-09-17',
     orgName: '平台与技术部-云+产品部', money: 8000 , style: 3}
  ];
  selectTasks: Task[] = [];
  constructor() {
   }

  ngOnInit() {
    this.selectType(0);
  }
  selectType(index: number): void {
    this.style = index;
    console.log('style' + index);
    this.selectTasks = [];
    for (const item of this.tasks ) {
      if (item.style === index) {
        this.selectTasks.push(item);
      }
    }
  }
}
