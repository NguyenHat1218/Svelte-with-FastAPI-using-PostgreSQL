<script>
	import {
		Card,
		CardBody,
		CardHeader,
		Col,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Dropdown,
		Label
	} from 'sveltestrap';
	import data from '../../common/data/dashboardcrm';
	import { onMount } from 'svelte';
  	import axios from 'axios';
	// import fetch from 'node-fetch'

  let results = [];

onMount(async () => {
    try {
        const response = await fetch('http://localhost:8000/choicesall/');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        results = await response.json();
		// let a= '1';
    } catch (error) {
        console.error('Error:', error);
        // throw error; // You can decide whether to rethrow the error or handle it
    }
});
</script>

<Col xl={5}>
	<Card class="card-height-100">
		<CardHeader class="align-items-center d-flex">
			<h4 class="card-title mb-0 flex-grow-1">My Tasks</h4>
			<div class="flex-shrink-0">
				<Dropdown class="card-header-dropdown">
					<DropdownToggle class="text-reset dropdown-btn p-0" color="" tag="a" role="button">
						<span class="text-muted"><i class="ri-settings-4-line align-bottom me-1 fs-15" />Settings</span
						>
					</DropdownToggle>
					<DropdownMenu class="dropdown-menu-end">
						<DropdownItem>Edit</DropdownItem>
						<DropdownItem>Remove</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</CardHeader>

		<!-- <CardBody class="p-0"> -->
			<!-- <div class="align-items-center p-3 justify-content-between d-flex">
				<div class="flex-shrink-0">
					<div class="text-muted">
						<span class="fw-semibold">4</span> of <span class="fw-semibold">10</span> remaining
					</div>
				</div>
				<button type="button" class="btn btn-sm btn-success"><i class="ri-add-line align-middle me-1" /> Add Task</button
				>
			</div> -->

			<!-- <div data-simplebar style="max-height: 219px;">
				<ul class="list-group list-group-flush border-dashed px-3">
					{#each data.tasks as item}
						<li class="list-group-item ps-0">
							<div class="d-flex align-items-start">
								<div class="form-check ps-0 flex-sharink-0">
									<input type="checkbox" class="form-check-input ms-0" id={item.forId} />
								</div>
								<div class="flex-grow-1">
									<Label class="form-check-label mb-0 ps-2" for={item.forId}>{item.text}</Label>
								</div>
								<div class="flex-shrink-0 ms-2">
									<p class="text-muted fs-12 mb-0">{item.date}</p>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div> -->
			
			<!-- <div class="p-3 pt-2">
				<a href="{null}" class="text-muted text-decoration-underline">Show more...</a>
			</div> -->
		<!-- </CardBody> -->
		<CardBody>
			<div class="table-responsive table-card">
				<table class="table table-borderless table-hover table-nowrap align-middle mb-0">
					<thead class="table-light">
						<tr class="text-muted">
							<th scope="col">Question_id</th>
							<th scope="col" style="width: 50%">Choices</th>
							<th scope="col">ID </th>
							<th scope="col" style="width: 16%">is_correct</th>
							
						</tr>
					</thead>

					<tbody>
						{#each results as item}
							<tr>
								<td>{item.question_id}</td>
								<td>{item.choice_text}</td>
								<td>{item.id}</td>
								<td>{item.is_correct}</td>
								
								</tr>
						{/each}
						
					</tbody>
					
				</table>
			</div>
		</CardBody>
	</Card>
</Col>
