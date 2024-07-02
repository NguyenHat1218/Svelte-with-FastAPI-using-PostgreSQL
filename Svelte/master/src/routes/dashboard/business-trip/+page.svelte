<svelte:head>
  <title>Analytics | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import { Col, Container, Row } from 'sveltestrap';
	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';

	//import COmponents

    import AppTrip from '../business-trip/app-trip.svelte';
	

	import Counter from '../../Components/Common/CounterPage.svelte';
</script>
<Counter />
<div class="page-content">
	<Container fluid>
		
		<Row>
			<AppTrip />
		</Row>
		
		
	</Container>
</div>