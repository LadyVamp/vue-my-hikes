<template>
  <div>
    <GasFlowCalculator />
  </div>
</template>

<script>
import GasFlowCalculator from '@/components/Calculator/GasFlowCalculator';

export default {
  components: {
    GasFlowCalculator,
  },
  metaInfo: {
    title: 'Калькулятор расхода газа для горелки',
  },
};
</script>

<style lang="scss" scoped></style>
