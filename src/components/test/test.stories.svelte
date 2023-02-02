<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';

	import Test from './test.svelte';
</script>

<Meta title="Test" component={Test} />

<Story name="Test1">
	<Test text="Hello World" />
</Story>
