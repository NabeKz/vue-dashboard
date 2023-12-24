<script setup lang="ts">
import FlexBox from '@/components/box/flex-box.vue';
import TableContainer from '@/components/table/table-container.vue';
</script>

<template>
  <FlexBox column>
    home
    <TableContainer>
      <template #header>
        <th>aaa</th>
        <th>bbb</th>
      </template>
      <template #record>
        <td>aaa</td>
        <td>bbb</td>
      </template>
    </TableContainer>
  </FlexBox>
</template>