<template>
  <div style="height: 100vh" class="container max-w-5xl mx-auto relative h-1/1 flex flex-col justify-start">
    <el-tabs type="border-card" class="mt-15">
      <el-tab-pane label="Tool Manager">
        <el-row>
          <el-col :span="24">
            <el-card shadow="hover">
              <el-row>
                <el-col :span="16">
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
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              />
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12" class="pr-1">
                          <el-form-item prop="link">
                            <el-input placeholder="Org Link" v-model="ruleForm.link" />
                          </el-form-item>
                        </el-col>
                        <el-col :span="12" class="pl-1">
                          <el-form-item prop="color">
                            <el-input placeholder="HEX Color eg. #FFFFFF" v-model="ruleForm.color" />
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-form-item>
                        <el-button type="primary" class="mr-auto" @click="submitForm(ruleFormRef)">Submit</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </el-col>
                <el-col :span="8">
                  <ToolFileUpload class="mt-9 p-2" @add-image="addImage" />
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :span="24" class="admin-card">
            <el-row :gutter="15" class="mt-15">
              <ToolsAdmin v-for="tool in tools" :key="tool.name" :tool-item="tool" />
            </el-row>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="Career Path Manager">Career Path Manager</el-tab-pane>
      <el-tab-pane label="User Manager">Users</el-tab-pane>
      <el-tab-pane label="Roles">Role</el-tab-pane>
    </el-tabs>
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
  link?: string;
  color?: string;
  type?: string[];
}
const ruleForm: CreateToolForm = reactive({
  name: '',
  imageUrl: '',
  link: '',
  color: '',
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
const addImage = (url: string) => {
  ruleForm.imageUrl = url;
};
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

<style scoped>
.el-dialog__header {
  display: none;
}
.admin-card {
  height: calc(100vh - 400px);
  overflow-y: auto;
  overflow-x: hidden;
}

.admin-card::-webkit-scrollbar {
  width: 4px;
}

.admin-card::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 100px;
}

.admin-card::-webkit-scrollbar-thumb {
  background-color: #c0ffee;

  border-radius: 100px;
}
</style>
