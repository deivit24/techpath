<template>
  <el-dialog v-model="dialog" width="500px" :close-on-click-modal="false" :show-close="false" destroy-on-close>
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
            <el-col :span="16" class="pr-2">
              <el-form-item prop="imageUrl">
                <el-input placeholder="Image Url" v-model="ruleForm.imageUrl" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="color">
                <el-input placeholder="HEX Color" v-model="ruleForm.color">
                  <template #prepend>#</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="description">
                <el-input placeholder="Enter a brief description" v-model="ruleForm.description" type="textarea">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-form-item>
              <el-button type="primary" class="mr-auto" @click="submitForm(ruleFormRef)">Submit</el-button>
            </el-form-item>
            <el-form-item class="ml-auto">
              <el-button @click="closeDialog()"> CLOSE </el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import dialoglStore from '@/store/dialogs';
import type { FormInstance } from 'element-plus';
import ToolsApi from '@/api/modules/tools';
const ruleFormRef = ref<FormInstance>();
interface CreatToolForm {
  name?: string;
  imageUrl?: string;
  description?: string;
  color?: string;
  type?: string[];
}
const ruleForm: CreatToolForm = reactive({
  name: '',
  imageUrl: '',
  description: '',
  color: '',
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
      await ToolsApi.editTool(ruleForm, store.getToolId);
      ElMessage.success('Successfully edited a tool');
      resetForm(formEl);
      closeDialog();
    } else {
      alert('error submit!');
      return false;
    }
  });
};
const closeDialog = () => {
  ruleForm.color = '';
  ruleForm.name = '';
  ruleForm.description = '';
  ruleForm.imageUrl = '';
  ruleForm.type = [];
  store.closeDialog();
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const toolId = computed(() => {
  return store.getToolId;
});
watch(toolId, async (value) => {
  if (value) {
    const res = await ToolsApi.getTool(value);

    ruleForm.name = res.name;
    ruleForm.imageUrl = res.imageUrl;
    ruleForm.type = res.type;
    if (res.description) ruleForm.description = res.description;
    if (res.color) ruleForm.color = res.color;
  }
});
</script>

<style>
.el-dialog__header {
  display: none;
}
.el-input-group__prepend {
  width: 32px !important;
}
</style>
