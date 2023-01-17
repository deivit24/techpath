<template>
  <div style="height: 100vh" class="container max-w-5xl mx-auto relative h-1/1 flex flex-col justify-center">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="10">
        <span style="color: #ffb22d" class="font-serif font-extralight text-6xl">Tech</span
        ><span class="font-serif font-extrabold text-6xl" style="color: #c0ffee">Path</span>
        <p v-if="!isLogin" class="font-serif text-xl">
          Create an account to start saving where you are and where you want to be
        </p>
        <p v-else class="font-serif text-xl">Login in to keep track of where you are and where you want to be</p>
      </el-col>
      <el-col :xs="24" :sm="12" :md="14">
        <el-card shadow="hover" style="max-width: 500px">
          <div class="card-header font-serif">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
              <el-form-item prop="name" v-if="!isLogin">
                <el-input placeholder="Name" v-model="ruleForm.name" />
              </el-form-item>
              <el-form-item prop="email">
                <el-input placeholder="Email" v-model="ruleForm.email" />
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="ruleForm.password" placeholder="Password" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item prop="checkPass" v-if="!isLogin">
                <el-input
                  v-model="ruleForm.checkPass"
                  placeholder="Confirm Password"
                  type="password"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="mr-auto" @click="submitForm(ruleFormRef)">Submit</el-button>
                <p class="hover:cursor-pointer" @click="isLogin = !isLogin">{{ authState }}</p>
                <el-switch class="ml-2" v-model="isLogin" inactive-color="#67C23A" />
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
import type { FormInstance } from 'element-plus';
import authStore from '@/store/auth';
const auth = authStore();
const ruleFormRef = ref<FormInstance>();
const isLogin = ref(true);
const authState = computed(() => {
  return isLogin.value ? 'Login' : 'Register';
});

const checkEmail = (rule: any, input: any, callback: any) => {
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.match(validEmail)) {
    return callback(new Error('Please input a valid email'));
  } else {
    callback();
  }
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'));
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField('checkPass', () => null);
    }
    callback();
  }
};

const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input your name'));
  } else {
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'));
  } else if (value !== ruleForm.password) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

interface LoginForm {
  password?: string;
  checkPass?: string;
  email?: string;
  name?: string;
}
const ruleForm: LoginForm = reactive({
  password: '',
  checkPass: '',
  email: '',
  name: '',
});

const rules = reactive({
  password: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  email: [{ validator: checkEmail, trigger: 'blur' }],
  name: [{ validator: validateName, trigger: 'blur' }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    console.log(valid);

    if (valid) {
      delete ruleForm.checkPass;
      if (isLogin.value) {
        delete ruleForm.name;
        await auth.login(ruleForm);
      } else {
        await auth.register(ruleForm);
      }
    } else {
      console.log('error submit!');
      return false;
    }
  });
};
</script>
