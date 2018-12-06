<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div>
        <div class="header-logo">后台管理系统</div>
        <div class="header-right">
            <div class="header-user-box">
                <!-- 全屏显示 -->
                <div class="fullscreen-btn" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>                
                <!-- 用户头像 -->
                <div class="user-avator"><img src="../assets/images/user.jpg"></div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-dropdown" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="#" target="_blank">
                            <el-dropdown-item>设&nbsp;&nbsp;&nbsp;&nbsp;置</el-dropdown-item>
                        </a>
                        <a href="#" target="_blank">
                            <el-dropdown-item>个人信息</el-dropdown-item> 
                        </a>
                        <el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from './bus';
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: '游客',
                message: 2
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('user_info');
                return username ? username : this.name;
            }
        },
        methods:{
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('user_info')
                    this.$router.push('/login');
                }
            },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        },
        mounted(){
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .right{
        float: right
    }
    .left{
        float: left;
    }
    .font-color{
        color: #fff;
        cursor: pointer;
    }
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 64px;
        font-size: 22px;
        color: #fff;
        .collapse-btn{
            @extend .left;
            padding: 0 21px;
            cursor: pointer;
            line-height: 64px;
        }
        &-logo{
            @extend .left;
            width:250px;
            line-height: 64px;
        }
        &-right{
            @extend .right;
            padding-right: 50px;
            .header-user-box{
                display: flex;
                height: 64px;
                align-items: center;
                .fullscreen-btn{
                    position: relative;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    border-radius: 15px;
                    cursor: pointer;
                    transform: rotate(45deg);
                    margin-right: 5px;
                    font-size: 24px;
                    &:hover{
                        background-color: rgba(255,255,255,.2);
                    }
                }
                .user-avator{
                    @extend .font-color;
                    margin-left: 20px;
                    img{
                        display: block;
                        width:40px;
                        height:40px;
                        border-radius: 50%;
                    }
                }
                .user-dropdown{
                    margin-left: 10px;
                    @extend .font-color;
                }
            }
        }
    }   
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
