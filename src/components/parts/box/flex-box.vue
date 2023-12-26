<script lang="ts">
import { h, type FunctionalComponent } from 'vue';

type Props = {
  row: true;
  column?: never;
} | {
  row?: never;
  column: true
}

const FlexBox: FunctionalComponent<Props> = (props, ctx) => {
  const direction = Object.entries(props).filter(([, v]) => v !== undefined)
  return h("div", { class: ["flex-box", direction] }, ctx.slots)
}

FlexBox.props = ["row", "column"]
export default FlexBox
</script>

<style scoped>
.flex-box {
  display: flex;

  &.row {
    flex-direction: row;
  }

  &.column {
    flex-direction: column;
  }
}
</style>