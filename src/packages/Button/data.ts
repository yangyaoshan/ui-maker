interface buttonData {
  type: string;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  icon?: string;
  text?: string;
  children?: Array<buttonData>;
}
let list: Array<buttonData> = [
  {
    type: "primary",
    text: "默认按钮"
  },
  {
    type: "primary",
    plain: true,
    text: "朴素按钮"
  },
  {
    type: "primary",
    round: true,
    icon: "el-icon-search",
    text: "圆角按钮"
  },
  {
    type: "primary",
    circle: true,
    icon: "el-icon-search",
    text: ""
  },
  {
    type: "primary",
    icon: "el-icon-edit",
    text: ""
  },
  {
    type: "text",
    icon: "",
    text: "文字按钮"
  },
  {
    type: "group",
    children: [
      {
        type: "primary",
        plain: false,
        round: false,
        circle: false,
        icon: "el-icon-arrow-left",
        text: "上一页"
      },
      {
        type: "primary",
        plain: false,
        round: false,
        circle: false,
        icon: "el-icon-arrow-right el-icon--right",
        text: "下一页"
      }
    ]
  }
];
export { list };
