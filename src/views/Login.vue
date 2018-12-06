<template>
    <div class="login-wrap">
        <div class="login-wrap-title">
            <img src="../assets/images/logo.png" alt="">&nbsp;
            <p>后台管理系统</p> 
        </div>
        <div class="login-wrap-form">            
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="form-content">
                <el-form-item prop="username" size="medium">
                    <el-input v-model="ruleForm.username" placeholder="username"  prefix-icon="el-icon-third-yonghu">                        
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" size="medium">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" prefix-icon="el-icon-third-suo" @keyup.enter.native="submitForm('ruleForm')">
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <div class="login-tips">
                    <p>没有账号？<router-link :to="{path:'/register'}">注册</router-link></p>
                    <p><router-link :to="{path: 'forget'}">忘记密码</router-link></p>
                </div>
                <div class="login-third">
                    <div class="login-box" @click="loginBySina()"><img src="../assets/images/Sina.png" alt=""></div>
                    <div class="login-box" @click="loginByWechat()"><img src="../assets/images/wechat.png" alt=""></div>
                    <div class="login-box" @click="loginByQQ()"><img src="../assets/images/qq.png" alt=""></div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: 'admin',
                    password: '123123'
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem('user_info',this.ruleForm.username);
                        this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    $width: 350px;
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../assets/images/bg.svg);
        background-size: 100%;
        &-title{
            position: absolute;
            top: 35%;
            left: 50%;
            width:$width;
            margin:-170px 0 0 -175px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size:22px;
        }
        &-form{
            position: absolute;
            left:50%;
            top:45%;
            width:$width;
            margin:-190px 0 0 -175px;
            border-radius: 5px;
            background: rgba(0,0,0, 0.02);
            overflow: hidden;
            .form-content{
                padding: 30px 30px;
                .login-btn{
                    text-align: center;
                    button{
                        width:100%;
                        height:36px;
                        margin-bottom: 10px;
                    }
                }
                .login-tips{
                    display: flex;
                    justify-content: space-between;
                    font-size:14px;
                    line-height:30px;
                }
               .login-third{
                    margin-top: 5px;
                    display: flex;
                    justify-content: space-around;
                    .login-box{
                        background:#e0e0e0;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 25px;
                            height: 25px;
                        }
                    }
                } 
            }            
        }
    }   
    
</style>