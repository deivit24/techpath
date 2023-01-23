<template>
  <div style="height: 100vh" class="container max-w-5xl mx-auto relative h-1/1 flex flex-col justify-start">
    <el-row :gutter="20" class="mt-15">
      <el-col :span="16">
        <el-card shadow="hover">
          <h1 class="font-serif font-extralight text-2xl mb-3">Create Tool</h1>
          <div class="card-body font-serif">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
              <el-row>
                <el-col :span="16" class="pr-1">
                  <el-form-item prop="name">
                    <el-input placeholder="Name" v-model="ruleForm.name" />
                  </el-form-item>
                </el-col>
                <el-col :span="8" class="pl-1">
                  <el-form-item prop="type">
                    <el-select
                      v-model="ruleForm.type"
                      multiple
                      placeholder="Select Types"
                      style="width: 100%"
                      collapse-tags
                      collapse-tags-tooltip
                    >
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item prop="imageUrl">
                <el-input placeholder="Image Url" v-model="ruleForm.imageUrl" />
              </el-form-item>
              <el-row>
                <el-form-item>
                  <el-button type="primary" class="mr-auto" @click="submitForm(ruleFormRef)">Submit</el-button>
                </el-form-item>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <h1 class="font-serif font-extralight text-2xl mb-3">Tool Types</h1>
          <el-row class="row-bg" justify="center">
            <el-col :span="12"
              ><div class="bg-blue-600 flex flex-col justify-center items-center" style="height: 75px">
                Frontend
              </div></el-col
            >
            <el-col :span="12"
              ><div class="bg-red-600 flex flex-col justify-center items-center" style="height: 75px">
                Backend
              </div></el-col
            >
            <el-col :span="12"
              ><div class="bg-purple-600 flex flex-col justify-center items-center" style="height: 75px">
                Fullstack
              </div></el-col
            >
            <el-col :span="12"
              ><div class="bg-yellow-600 flex flex-col justify-center items-center" style="height: 75px">
                DevOps
              </div></el-col
            >
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-row :gutter="20" class="mt-15">
          <ToolsAdmin v-for="tool in tools" :key="tool.name" :tool-item="tool" />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import type { FormInstance } from 'element-plus';
import ToolsApi from '@/api/modules/tools';
const ruleFormRef = ref<FormInstance>();
interface CreateToolForm {
  name?: string;
  imageUrl?: string;
  type?: string[];
}
const ruleForm: CreateToolForm = reactive({
  name: '',
  imageUrl: '',
  type: [],
});
const tools: Ref<Array<CreateToolForm>> = ref([]);
const options = [
  {
    value: 'FRONTEND',
    label: 'Frontend',
  },
  {
    value: 'BACKEND',
    label: 'Backend',
  },
  {
    value: 'DEVOPS',
    label: 'DevOps',
  },
];

const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input tool name'));
  } else {
    callback();
  }
};
const validateType = (rule: any, value: any, callback: any) => {
  if (value.length === 0) {
    callback(new Error('Please input a type'));
  } else {
    callback();
  }
};
const validateImageUrl = (rule: any, value: any, callback: any) => {
  if (!validateUrl(value)) {
    callback(new Error('Please input valid URL'));
  } else {
    callback();
  }
};
const rules = reactive({
  name: [{ validator: validateName, trigger: 'blur' }],
  imageUrl: [{ validator: validateImageUrl, trigger: 'blur' }],
  type: [{ validator: validateType, trigger: 'blur' }],
});
const validateUrl = (value: string) => {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value,
  );
};
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      await ToolsApi.createTool(ruleForm);
      ElMessage.success('Successfully created a tool');
      resetForm(formEl);
    } else {
      alert('error submit!');
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

onMounted(async () => {
  const res = await ToolsApi.getTools();

  tools.value = res;
});
</script>

<style>
.el-dialog__header {
  display: none;
}
</style>
