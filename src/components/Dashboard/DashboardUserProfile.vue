<template>
  <el-row>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="avatar" class="image" v-if="!loading" />
        <el-skeleton style="width: 100%" v-if="loading" :loading="true" animated>
          <template #template>
            <el-skeleton-item variant="image" style="width: 100%; height: 260px" />
          </template>
        </el-skeleton>
        <div style="padding: 14px" class="flex">
          <span>{{ username }}</span>
          <el-upload
            :limit="1"
            :show-file-list="false"
            :auto-upload="false"
            class="ml-auto"
            accept="image/*"
            :on-change="handleChange"
          >
            <el-tooltip content="Upload New Image" placement="top">
              <button class="icon-btn text-xs" @click="">
                <i-carbon:upload class="icon-footer" />
              </button>
            </el-tooltip>
          </el-upload>
        </div>
      </el-card>
    </el-col>
    <el-col :span="18" class="p-5">
      <el-row>
        <el-col :span="8" class="px-2">
          <el-input :readonly="!editMode" v-model="username" placeholder="Username">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon-user></i-carbon-user> </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="8" class="px-2">
          <el-input :readonly="!editMode" v-model="email" placeholder="Email">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon-email></i-carbon-email> </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="8" class="px-2">
          <el-select :disabled="!editMode" v-model="language" clearable placeholder="Select Language" class="w-1/1">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon-language></i-carbon-language> </el-icon>
            </template>
            <el-option v-for="item in ['ENGLISH', 'SPANISH']" :label="item" :value="item" />
          </el-select>
        </el-col>
        <el-col :span="8" class="px-2 mt-3">
          <el-input :readonly="!editMode" v-model="firstName" placeholder="First Name">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon:identification /> </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="8" class="px-2 mt-3">
          <el-input :readonly="!editMode" v-model="lastName" label="Last Name" placeholder="Last Name">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon:identification /> </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="8" class="px-2 mt-3">
          <el-select
            :disabled="!editMode"
            v-model="learningMethod"
            clearable
            placeholder="Learning Method"
            class="w-1/1"
          >
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon-tools></i-carbon-tools> </el-icon>
            </template>
            <el-option v-for="item in learningMethods" :label="item" :value="item" />
          </el-select>
        </el-col>
        <el-col :span="24" class="px-2 mt-3">
          <el-input :readonly="!editMode" type="textarea" v-model="bio" placeholder="Bio"> </el-input>
        </el-col>
        <el-col :span="12" class="px-2 mt-3">
          <el-input :readonly="!editMode" v-model="github" placeholder="Github URL">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon-logo-github></i-carbon-logo-github> </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="12" class="px-2 mt-3">
          <el-input :readonly="!editMode" v-model="linkedin" placeholder="LinkedIn URL">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon-logo-linkedin></i-carbon-logo-linkedin> </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="12" class="px-2 mt-3">
          <el-input :readonly="!editMode" v-model="currentTitle" placeholder="Current Title">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon-industry></i-carbon-industry> </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="12" class="px-2 mt-3">
          <el-input :readonly="!editMode" v-model="currentCompensation" type="number" placeholder="Current Compesation">
            <template #prefix>
              <el-icon class="el-input__icon"> <i-carbon-currency></i-carbon-currency> </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="6" class="px-2 mt-3 flex">
          <p class="font-serif text-sm mr-2 mt-2">{{ darkModeText }}</p>
          <el-switch :disabled="!editMode" size="large" v-model="darkMode" inline-promp />
        </el-col>
        <el-col :span="6" class="px-2 mt-3 flex">
          <p class="font-serif text-sm mr-2 mt-2">{{ isPrivateText }}</p>
          <el-switch :disabled="!editMode" size="large" v-model="isPrivate" inline-prompt />
        </el-col>
        <el-col :span="6" class="px-2 mt-3 flex">
          <el-checkbox :disabled="!editMode" v-model="student">Student</el-checkbox>
        </el-col>
        <el-col :span="6" class="px-2 mt-3 flex">
          <el-checkbox :disabled="!editMode" v-model="employed">Employed</el-checkbox>
        </el-col>
        <el-col :span="24" class="px-2 mt-3 flex justify-end">
          <el-button v-if="!editMode" type="info" class="ml-auto" @click="editMode = true"> Edit </el-button>
          <el-button v-else type="primary" class="ml-auto" @click="updateProfile"> Save </el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import authStore from '@/store/auth';
import UsersApi from '@/api/modules/user';
import type { UploadProps, UploadUserFile } from 'element-plus';

const auth = authStore();
const editMode = ref(false);
const loading = ref(false);
const darkMode = ref(false);
const isPrivate = ref(false);
const bio = ref('');
const student = ref(false);
const employed = ref(false);
const currentTitle = ref('');
const currentCompensation = ref(0);
const username = ref('');
const firstName = ref('');
const lastName = ref('');
const learningMethod = ref('');
const language = ref('ENGLISH');
const github = ref('');
const linkedin = ref('');
const email = ref('');
const avatar = computed(() => {
  return auth.getUserAvatar ? auth.getUserAvatar : '';
});
const learningMethods = ['C.S. Degree', 'Bootcamp', 'Self-taught', 'Online Paid Courses'];
const darkModeText = computed(() => {
  return darkMode.value ? 'Dark Mode' : 'Light Mode';
});
const isPrivateText = computed(() => {
  return isPrivate.value ? 'Private' : 'Public';
});
const handleChange: UploadProps['onChange'] = async (uploadFile, uploadFiles) => {
  loading.value = true;
  const formData = new FormData();
  //@ts-ignore
  formData.append('files', uploadFile.raw);
  const res = await UsersApi.uploadAvatar(formData);
  //@ts-ignore
  auth.setAvatar(res.data.imageUrl);

  loading.value = false;
};

const updateProfile = async () => {
  const settings = {
    darkMode: darkMode.value,
    private: isPrivate.value,
    language: language.value,
    linkedin: linkedin.value,
    github: github.value,
    firstName: firstName.value,
    lastName: lastName.value,
    student: student.value,
    employed: employed.value,
    currentCompensation: currentCompensation.value,
    currentTitle: currentTitle.value,
    bio: bio.value,
    learningMethod: learningMethod.value,
  };

  await UsersApi.updateUserSettings(settings);
  editMode.value = false;
};
onMounted(async () => {
  const res = await UsersApi.getUserSettings();
  darkMode.value = res.darkMode;
  isPrivate.value = res.private;
  language.value = res.language;
  firstName.value = res.firstName;
  bio.value = res.bio;
  student.value = res.student;
  employed.value = res.employed;
  lastName.value = res.lastName;
  learningMethod.value = res.learningMethod;
  currentCompensation.value = res.currentCompensation;
  currentTitle.value = res.currentTitle;
  email.value = auth.getUser?.email ? auth.getUser?.email : '';
  username.value = auth.getUser?.name ? auth.getUser?.name : '';
  github.value = res.github ? res.github : '';
  linkedin.value = res.linkedin ? res.linkedin : '';
});
</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
</style>
