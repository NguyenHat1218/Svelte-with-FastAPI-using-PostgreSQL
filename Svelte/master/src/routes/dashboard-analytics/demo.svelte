<!-- <script>
    import { Button, Card, CardBody, Col, Row } from 'sveltestrap';
    import CountriesCharts from "./CountriesCharts.svelte"
    import Map from '../../Components/Common/Map.svelte'
  import AudiencesCharts from './AudiencesCharts.svelte';
  import { onMount } from 'svelte';
  	import axios from 'axios';
	// import fetch from 'node-fetch'

  let result = [];

onMount(async () => {
    try {
        const response = await fetch('http://localhost:8000/imageall/');
        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
        }
        result = await response.json();
		// let a= '1';
    } catch (error) {
        console.error('Error:', error);
        // throw error; // 
    }
});
</script> -->

<!-- <Col xl={7}>
<Row class="h-100">
    <Col xl={6}> -->
    <!-- <Card class="card-height-100">
        <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">H   I </h4>
            <div class="flex-shrink-0">
                <Button type="button" color="soft-primary" size="sm" class="material-shadow-none">
                    Export Report
                </Button>
            </div>
        </div>            
    </Card> -->
    <!-- <div class="table-responsive table-card">
        <table class="table align-middle table-borderless table-centered table-nowrap mb-0">
            <thead class="text-muted table-light">
                <tr>
                    <th scope="col" style="width: 62">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Descr</th>
                </tr>
            </thead>
            <tbody>
                {#each result as item}
                <tr> -->
                    <!-- <td>
                        <a href="{null}">{item.page}</a>
                    </td> -->
                    <!-- <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.image}</td>
                    <td>{item.description}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
    </Col>
</Row>
</Col> -->