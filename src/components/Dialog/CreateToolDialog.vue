<template>
  <el-dialog v-model="dialog" width="500px" :close-on-click-modal="false" :show-close="false">
    <el-card shadow="hover">
      <div class="card-body font-serif">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
          <el-row>
            <el-col :span="12" class="pr-1">
              <el-form-item prop="name">
                <el-input placeholder="Name" v-model="ruleForm.name" />
              </el-form-item>
            </el-col>
            <el-col :span="12" class="pl-1">
              <el-form-item prop="type">
                <el-select v-model="ruleForm.type" multiple placeholder="Select Types" style="width: 100%">
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
            <el-form-item class="ml-auto">
              <el-button @click="store.closeDialog()"> CLOSE </el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import dialoglStore from '@/store/dialogs';
import type { FormInstance } from 'element-plus';
import ToolsApi from '@/api/modules/tools';
const ruleFormRef = ref<FormInstance>();
interface CreatToolForm {
  name?: string;
  imageUrl?: string;
  type?: string[];
}
const ruleForm: CreatToolForm = reactive({
  name: '',
  imageUrl: '',
  type: [],
});
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

const store = dialoglStore();

const dialog = computed(() => {
  return store.getDialog;
});
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
function validateUrl(value: string) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value,
  );
}
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
</script>

<style>
.el-dialog__header {
  display: none;
}
</style>
