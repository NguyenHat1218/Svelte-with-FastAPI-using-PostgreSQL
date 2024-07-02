<svelte:head>
  <title>Analytics | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import { Col, Container, Row } from 'sveltestrap';
	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';

	//import COmponents
	
 	import Product from './Product.svelte';
</script>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Product" pageTitle="Dashboards" />
		<Row>
			<Product/>
		</Row>
	</Container>
</div>