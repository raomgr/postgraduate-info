<template>
  <div class="email-manage">
    <div class="content">
      <div class="content-left">
        <div class="editor">
          <el-form ref="emailForm" :label-position="labelPosition" label-width="80px">
            <el-form-item label="收件人">
              <div class="recipient-list" :class="{'animation':isFocus}" tabindex="0" @focus="focus" @blur="blur">
                <div
                  class="recipient-item"
                  v-for="(item, index) in allNodes"
                  :key="index"
                >
                  <span>{{ item.name }}</span>
                  <span class="close" @click="removeRecipient(item)"></span>
                </div>
                <!--                <input type="text" class="cursor-area">-->
              </div>
            </el-form-item>
          </el-form>
        </div>
        {{ allNodes }}
        {{ allIds }}
      </div>
      <div class="content-right">
        <div class="tab">
          <span :class="{ active: roleType === 3 }" @click="switchTab(3)"
          >衔接学校</span
          >
          <span :class="{ active: roleType === 2 }" @click="switchTab(2)"
          >主考院校</span
          >
        </div>
        <div class="tab-content">
          <el-tree
            v-show="roleType === 3"
            :data="politList"
            show-checkbox
            ref="tree"
            node-key="id"
            check-on-click-node
            @check-change="getCheckedPolit"
            :default-checked-keys="politCheckedKeys"
            :props="defaultProps"
          >
          </el-tree>
          <el-tree
            v-show="roleType === 2"
            :data="chiefList"
            show-checkbox
            ref="chief"
            node-key="id"
            check-on-click-node
            @check-change="getCheckedChiefUnit"
            :default-checked-keys="chiefCheckedKeys"
            :props="defaultProps"
          >
          </el-tree>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'emailManage',
  components: {

  },
  data () {
    return {
      emailId: '',
      content: '',
      emailText: '',
      labelPosition: 'right',
      theme: '',
      date: '',
      time: '',
      checkTheme: true,
      checkRecipient: true,
      checkDate: true,
      checkTime: true,
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      list: [],
      checkedKyes: [],
      timeList: [],
      isSave: false, // 是否保存为模板
      editStatus: false,
      panelStatus: false,
      readonly: 0, // 文本编辑器是否可编辑
      mode: '', // 编辑模式：选择模板、在线编辑
      showPanel: false,
      arg: '',
      roleType: 3, // 2主考院校，3衔接学校
      politList: [
        {
          id: 1,
          name: '清华大学',
          children: [
            {
              id: 11,
              name: '计算机学院'
            },
            {
              id: 12,
              name: '机械学院'
            },
            {
              id: 13,
              name: '马克思学院'
            },
            {
              id: 14,
              name: '电子信息学院'
            },
            {
              id: 15,
              name: '经济学院'
            },
            {
              id: 16,
              name: '建筑学院'
            }
          ]
        },
        {
          id: 2,
          name: '北京大学',
          children: [
            {
              id: 21,
              name: '管理学院'
            },
            {
              id: 22,
              name: '数学学院'
            },
            {
              id: 23,
              name: '金融学院'
            }
          ]
        }
      ],
      chiefList: [

      ],
      chiefUnitList: [],
      politUnitList: [],
      politCheckedKeys: [],
      chiefCheckedKeys: [],
      templateId: '',
      currentTime: '',
      expireTimeOption: {
        disabledDate (date) {
          // disabledDate 文档上：设置禁用状态，参数为当前日期，要求返回 Boolean
          return date.getTime() < Date.now() - 24 * 60 * 60 * 1000
        }
      },
      hasSaved: false, // 邮件是否已经保存
      isFocus: false,
      list1: [
        {
          id: 11,
          name: '学院'
        },
        {
          id: 12,
          name: '机械学院'
        }
      ],
      list2: [

      ]
    }
  },
  watch: {
  },
  computed: {

    allNodes () {
      return [...this.politUnitList, ...this.chiefUnitList]
    },
    allIds () {
      return this.allNodes.map(item => item.id)
    }
  },
  mounted () {
    setTimeout(() => {
      this.politCheckedKeys = this.list1.map(item => item.id)
      this.chiefCheckedKeys = this.list2.map(item => item.id)
      this.politUnitList = this.list1
      this.chiefUnitList = this.list2
    }, 2000)
    setTimeout(() => {
      this.chiefUnitList = [{
        id: 6,
        name: '复旦大学',
        children: [
          {
            id: 61,
            name: '医学院'
          },
          {
            id: 62,
            name: '人文学院'
          }
        ]
      },
      {
        id: 7,
        name: '交通大学',
        children: [
          {
            id: 71,
            name: '计算机学院'
          },
          {
            id: 72,
            name: '大数据学院'
          },
          {
            id: 73,
            name: '理学院'
          }
        ]
      }]
      this.politUnitList = [
        {
          id: 1,
          name: '清华大学',
          children: [
            {
              id: 11,
              name: '计算机学院'
            },
            {
              id: 12,
              name: '机械学院'
            },
            {
              id: 13,
              name: '马克思学院'
            },
            {
              id: 14,
              name: '电子信息学院'
            },
            {
              id: 15,
              name: '经济学院'
            },
            {
              id: 16,
              name: '建筑学院'
            }
          ]
        },
        {
          id: 2,
          name: '北京大学',
          children: [
            {
              id: 21,
              name: '管理学院'
            },
            {
              id: 22,
              name: '数学学院'
            },
            {
              id: 23,
              name: '金融学院'
            }
          ]
        }]
    }, 3000)
  },
  methods: {
    disabledDate (time) {
      return time.getTime() > Date.now()
    },
    focus () {
      this.isFocus = true
    },
    blur () {
      this.isFocus = false
    },
    // getEmailDetail () {
    //
    // },
    // 邮件纯文本内容
    setText (val) {
      this.emailText = val
      console.log(val)
    },
    getIdList (list, unitList) {
      list.forEach(item => {
        if (item.children.length) {
          this.getIdList(item.children)
        } else {
          this[unitList].push(item)
        }
      })
    },
    // 获取所有收件人列表
    // 删除收件人
    removeRecipient (item) {
      console.log(this.allNodes)
      if (this.roleType === 3) {
        this.politUnitList.forEach((ele, index) => {
          if (ele.id === item.id) {
            this.politUnitList.splice(index, 1)
            this.$refs.tree.setCheckedNodes(this.politUnitList)
            this.$refs.chief.setCheckedNodes(this.chiefUnitList)
          }
        })
      }
      if (this.roleType === 2) {
        this.chiefUnitList.forEach((ele, index) => {
          if (ele.id === item.id) {
            this.chiefUnitList.splice(index, 1)
            this.$refs.tree.setCheckedNodes(this.politUnitList)
            this.$refs.chief.setCheckedNodes(this.chiefUnitList)
          }
        })
      }
    },
    switchTab (tab) {
      this.roleType = tab
    },
    // 获取选中的衔接学校
    getCheckedPolit () {
      this.getCheckedPerson('tree', 'politUnitList')
    },
    // 获取选中的主考院校
    getCheckedChiefUnit () {
      this.getCheckedPerson('chief', 'chiefUnitList')
    },
    // 获取选中收件人
    getCheckedPerson (nodeName, unitListName) {
      const nodes = this.$refs[nodeName].getCheckedNodes()
      this[unitListName] = []
      nodes.forEach(item => {
        if (item.children === undefined) {
          this[unitListName].push(item)
        }
      })
    },
    // 选择模板模式
    selectTemplate () {
      this.panelStatus = true
      this.mode = 'template'
    },
    // 在线编辑模式
    handleOnLineEdit () {
      this.editStatus = true
      this.readonly = 0
      this.mode = 'online'
    },
    hidePanel () {
      this.panelStatus = false
    },
    // 选择模板
    insertTemplate (content, templateId) {
      this.panelStatus = false
      this.editStatus = true
      this.$refs.editor.setContent(content) // 通过此方式从外部修改编辑器内容
      this.templateId = templateId
      this.readonly = 1
    },
    // 进入编辑状态
    handleEdit () {
      this.readonly = 0
      this.mode = 'online'
    },
    // 重选模板
    reselectTemplate () {
      this.panelStatus = true
    },
    // 保存邮件
    saveEmail (formName) {
      console.log(this.$refs.editor.getContent())
      if (
        this.theme &&
        this.allNodes.length &&
        this.date &&
        this.time &&
        this.content
      ) {
        console.log(this.date)
        this.$request
          .addEmail({
            title: this.theme,
            recipientIdList: this.allIds,
            sendDate: this.date,
            sendHour: this.time,
            content: this.content,
            text: this.isSave ? this.emailText : '', // 保存模板时传纯文本
            useTemplate: this.templateId ? (this.isSave ? 0 : 1) : 0,
            templateId: this.templateId ? (this.isSave ? '' : this.templateId) : '',
            saveTemplate: this.isSave ? 1 : 0,
            emailId: this.emailId
          })
          .then(res => {
            if (res.retcode === 0) {
              this.$message.success('保存成功')
              this.hasSaved = true
              this.$router.push('emailManage')
            }
            console.log(res)
          })
        // console.log('success')
        console.log(this.content)
      } else {
        this.$message.error('请完善邮件信息')
      }
    },
    setEmailContent (val) {
      this.$store.dispatch('richText/handleEmailDetail', val)
    },
    closePanel (arg) {
      this.showPanel = false
      this.arg = arg
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(to, from)
    if (this.content !== '' && !this.hasSaved) {
      this.$confirm('邮件内容未保存, 是否离开当前页面?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // this.$store.dispatch('removeVisitedTag', from)
          next()
        })
        .catch(() => {
          next(false)
        })
    } else {
      // this.$store.dispatch('removeVisitedTag', from)
      next()
    }
  }
}
</script>

<style lang="less" scoped>
  /*@import "../../assets/styl/pageTitle";*/
  .email-manage {
    .save {
      margin-bottom: 20px;
    }
    .content {
      display: flex;
      .content-left {
        background: #fff;
        flex: 1;
        .editor {
          padding: 0 30px 30px;
          .recipient-list {
            min-height: 36px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            border: 1px solid #dcdfe6;
            padding: 0 10px;
            border-radius: 4px;
            cursor: text;
            outline: none;
            max-height: 98px;
            overflow-y: auto;
            &.animation {
              border:1px solid #17caaa;
              &:after {
                content:'';
                display: block;
                width:1px;
                transform: scaleX(0.5);
                height:18px;
                animation: blink 1s infinite steps(1, start);
              }
            }
            .recipient-item {
              font-size: 12px;
              display: flex;
              align-items: center;
              height: 22px;
              padding: 0 6px;
              background: rgba(252, 252, 252, 1);
              border-radius: 11px;
              border: 1px solid rgba(189, 189, 187, 1);
              margin: 4px 6px;
              color: #283650;
              span:last-child {
                width: 14px;
                height: 14px;
                /*background: url("../../assets/images/close-email.png") center*/
                /*no-repeat;*/
                background-size: contain;
                margin-left: 6px;
                cursor: pointer;
              }
            }
            .cursor-area {
              outline: none;
              border: none;
              text-shadow: none;
              -webkit-appearance: none;
              -webkit-user-select: text;
              box-shadow: none;
            }
          }
        }
        .edit-btn {
          height: 360px;
          text-align: center;
          border: 1px solid #ccc;
          h3 {
            text-align: center;
            color: #606266;
            padding-top: 120px;
            margin-bottom: 50px;
          }
          div {
            display: inline-block;
          }
        }
        .template-mode {
          padding-top: 10px;
          .save-btn {
            width: 100px;
            margin-right: 20px;
          }
          .check {
            color: #6d7278;
          }
        }
      }
      .content-right {
        background: #fff;
        width: 210px;
        margin-left: 16px;
        .tab {
          /*height: 40px;*/
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: #283650;
          margin-bottom: 24px;
          span {
            width: 105px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
          }
          .active {
            color: #fff;
            background: #17caaa;
          }
        }
        .tab-content {
          overflow-y: auto;
          padding: 0 20px 0 10px;
          max-height: 660px;
        }
      }
    }
  }
  .tab-content /deep/ .el-tree-node__label {
    color: #000000;

    font-size: 12px;
    margin-left: 4px;
  }
  .tab-content /deep/ .el-tree{
    overflow: auto;
  }

  @keyframes blink {
    0% {
      background-color: white;
    }
    50% {
      background-color: black;
    }
    100% {
      background-color: white;
    }
  }
</style>
