<!--
 * @Author: shaojilin 1634072334@qq.com
 * @Date: 2025-02-26 13:49:41
 * @LastEditors: shaojilin 1634072334@qq.com
 * @LastEditTime: 2025-02-26 14:06:05
 * @FilePath: \AI_Project\ClickInteraction.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="interaction-container">
    <button 
      @click="handleClick" 
      :disabled="isLoading" 
      :class="{ 'loading': isLoading }"
      class="interaction-button">
      {{ isLoading ? 'Loading...' : 'Click Me' }}
    </button>
    <p v-if="isLoading" class="loading-message">Processing your request...</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ClickInteraction',
  data() {
    return {
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    };
  },
  methods: {
    handleClick() {
      this.isLoading = true;
      this.errorMessage = null;
      this.successMessage = null;
      
      // Add timeout to prevent infinite loading state
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timed out')), 10000);
      });
      
      // Use Promise.race to handle timeouts
      Promise.race([
        axios.get('http://localhost:3000/api/interaction'),
        timeoutPromise
      ])
        .then(response => {
          console.log('Response:', response.data);
          this.successMessage = 'Operation completed successfully!';
        })
        .catch(error => {
          console.error('Error:', error);
          this.errorMessage = error.message || 'An error occurred during the operation';
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.interaction-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.interaction-button {
  background-color: #4285f4;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.interaction-button:hover:not(:disabled) {
  background-color: #3367d6;
}

.interaction-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.interaction-button.loading {
  background-color: #cccccc;
}

.loading-message {
  color: #666;
  margin-top: 10px;
}

.error-message {
  color: #d32f2f;
  margin-top: 10px;
}

.success-message {
  color: #388e3c;
  margin-top: 10px;
}
</style>



