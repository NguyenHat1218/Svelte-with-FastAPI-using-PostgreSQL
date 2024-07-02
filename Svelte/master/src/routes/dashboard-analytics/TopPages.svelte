<script>
	import {
		Card,
		CardBody,
		CardHeader,
		Col,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle
	} from 'sveltestrap';

	import data from '../../common/data/analytics';

	import { onMount } from 'svelte';
  	import axios from 'axios';
	// import fetch from 'node-fetch'

  let result = [];

onMount(async () => {
    try {
        const response = await fetch('http://localhost:8000/itemsall/');
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

</script>

<Col xl={4} md={6}>
	<Card class="card-height-100">
		<CardHeader class="align-items-center d-flex">
			<h4 class="card-title mb-0 flex-grow-1">Personal Information</h4>
			<!-- <div class="flex-shrink-0">
				<Dropdown class="card-header-dropdown">
					<DropdownToggle tag="div" color="" class="text-reset dropdown-btn p-0" role="button">
						<span class="text-muted fs-16"><i class="mdi mdi-dots-vertical align-middle" /></span>
					</DropdownToggle>
					<DropdownMenu class="dropdown-menu-end">
						<DropdownItem>Today</DropdownItem>
						<DropdownItem>Last Week</DropdownItem>
						<DropdownItem>Last Month</DropdownItem>
						<DropdownItem>Current Year</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div> -->
		</CardHeader>
		<CardBody>
			<div class="table-responsive table-card">
				<table class="table align-middle table-borderless table-centered table-nowrap mb-0">
					<thead class="text-muted table-light">
						<tr>
							<th scope="col" style="width: 62">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Description</th>
						</tr>
					</thead>
					<tbody>
						{#each result as item}
                        <tr>
                            <!-- <td>
                                <a href="{null}">{item.page}</a>
                            </td> -->
                            <td>{item.id}</td>
                            <td>{item.name}</td>
							<td>{item.description}</td>
                        </tr>
                        {/each}
					</tbody>
				</table>
			</div>
		</CardBody>
	</Card>
</Col>
