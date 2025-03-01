<svelte:head>
	<title>Create Project | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import {
		Card,
		CardBody,
		Container,
		Col,
		Row,
		Button,
		Label,
		Tooltip,
		CardHeader
	} from 'sveltestrap';
	import { onMount } from 'svelte';
	import Link from 'svelte-link';
	import Select from 'svelte-select';
	import Flatpickr from 'svelte-flatpickr';
	import BreadCrumb from '../../../Components/Common/BreadCrumb.svelte';
	import avatar3 from '../../../assets/images/users/avatar-3.jpg';
	import avatar4 from '../../../assets/images/users/avatar-4.jpg';
	import Dropzone from 'svelte-file-dropzone';
	import Editor from '@tinymce/tinymce-svelte';

	let files = {
		accepted: [],
		rejected: [],
		preview: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];

		const uploadedfiles = event.target.files;
		for (var i = 0; i < uploadedfiles.length; i++) {
			const file = uploadedfiles[i];
			if (file) {
				const reader = new FileReader();

				reader.onload = (e) => {
					files.preview = [...files.preview, e.target.result];
				};

				reader.readAsDataURL(file);
			}
		}
	}

	function handleRemoveFile(e, index) {
		if (confirm("Are sure want to cancel upload file?")) {
			files.accepted.splice(index, 1);
			files.preview.splice(index, 1);
			files.accepted = [...files.accepted];
		}
	}

	let imageSrc = "";

	// Function to handle image upload
	function handleImageUpload(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				imageSrc = e.target.result;
			};

			reader.readAsDataURL(file);
		}
	}

	const SingleOptions = [
		{ value: 'Ui/Ux', label: 'Ui/Ux' },
		{ value: 'Figma', label: 'Figma' },
		{ value: 'Html', label: 'Html' },
		{ value: 'Css', label: 'Css' },
		{ value: 'Javascript', label: 'Javascript' },
		{ value: 'C#', label: 'C#' },
		{ value: 'Nodejs', label: 'Nodejs' }
	];

	const options = [
		{ value: 'Brent Gonzalez', label: 'Brent Gonzalez' },
		{ value: 'Darline Williams', label: 'Darline Williams' },
		{ value: 'Sylvia Wright', label: 'Sylvia Wright' },
		{ value: 'Ellen Smith', label: 'Ellen Smith' },
		{ value: 'Jeffrey Salazar', label: 'Jeffrey Salazar' },
		{ value: 'Mark Williams', label: 'Mark Williams' }
	];

	const categoryOption = [
		{ value: 'Designing', label: 'Designing' },
		{ value: 'Development', label: 'Development' }
	];

	const statusOption = [
		{ value: 'Inprogress', label: 'Inprogress' },
		{ value: 'Completed', label: 'Completed' }
	];

	const priorityOptions = [
		{ value: 'High', label: 'High' },
		{ value: 'Medium', label: 'Medium' },
		{ value: 'Low', label: 'Low' }
	];
</script>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Create Project" pageTitle="Projects" />
		<Row>
			<Col lg={8}>
			<Card>
				<CardBody>
					<div class="mb-3">
						<Label class="form-label" for="project-title-input">Project Title</Label>
						<input type="text" class="form-control" id="project-title-input"
							placeholder="Enter project title" />
					</div>

					<div class="mb-3">
						<Label class="form-label" for="project-thumbnail-img">Thumbnail Image</Label>
						<input class="form-control" id="project-thumbnail-img" type="file"
							accept="image/png, image/gif, image/jpeg" />
					</div>

					<div class="mb-3">
						<Label class="form-label" for="project-description-input">Project Description</Label>
						<Editor />
					</div>

					<Row>
						<div class="col-lg-4">
							<div class="mb-3 mb-lg-0">
								<Label for="choices-priority-input" class="form-label">Priority</Label>
								<Select class="form-select" id="choices-priority-input" items={priorityOptions}>
								</Select>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="mb-3 mb-lg-0">
								<Label for="choices-status-input" class="form-label">Status</Label>
								<Select class="form-select" id="choices-status-input" items={statusOption}>
								</Select>
							</div>
						</div>
						<div class="col-lg-4">
							<div>
								<Label for="datepicker-deadline-input" class="form-label">Deadline</Label>
								<Flatpickr class="form-control" options={{ dateFormat: 'd M, Y' }}
									placeholder="Selact Date" />
							</div>
						</div>
					</Row>
				</CardBody>
				<!-- end card body -->
			</Card>
			<!-- end card -->

			<Card>
				<CardHeader>
					<h5 class="card-title mb-0">Attached files</h5>
				</CardHeader>
				<CardBody>
					<div>
						<p class="text-muted">Add Attached files here.</p>
						<Dropzone on:drop={handleFilesSelect}>
							<div>
								<div class="dz-message needsclick">
									<div class="dz-message needsclick">
										<div class="mb-3">
											<i class="display-4 text-muted ri-upload-cloud-2-fill" />
										</div>
										<h5>Drop files here or click to upload.</h5>
									</div>
								</div>
							</div>
						</Dropzone>

						<ul class="list-unstyled mb-0" id="dropzone-preview">
							{#each files.accepted as item,index}
							<li class="mt-2" id="dropzone-preview-list">
								<!-- This is used as the file preview template -->
								<div class="border rounded">
									<div class="d-flex p-2">
										<div class="flex-shrink-0 me-3">
											<div class="avatar-sm bg-light rounded">
												<img class="img-fluid rounded d-block" src={files.preview[index]}
													alt="Product-Image" style="height: 100%;" />
											</div>
										</div>
										<div class="flex-grow-1">
											<div class="pt-1">
												<h5 class="fs-14 mb-1">{item.name}</h5>
												<p class="fs-13 text-muted mb-0">{item.size}</p>
												<strong class="error text-danger"></strong>
											</div>
										</div>
										<div class="flex-shrink-0 ms-3">
											<button class="btn btn-sm btn-danger" on:click={(e)=>
												handleRemoveFile(e, index)}>Delete</button>
										</div>
									</div>
								</div>
							</li>
							{/each}
						</ul>

						<!-- end dropzon-preview -->
					</div>
				</CardBody>
			</Card>
			<!-- end card -->
			<div class="text-end mb-4">
				<Button color="danger" class="w-sm">Delete</Button>
				<Button color="secondary" class="w-sm">Draft</Button>
				<Button color="success" class="w-sm">Create</Button>
			</div>
			</Col>
			<!-- end col -->
			<Col class="col-lg-4">
			<Card>
				<CardHeader>
					<h5 class="card-title mb-0">Privacy</h5>
				</CardHeader>
				<CardBody>
					<div>
						<Label for="choices-privacy-status-input" class="form-label">Status</Label>
						<Select class="form-select" id="choices-privacy-status-input" items={options} />
					</div>
				</CardBody>
				<!-- end card body -->
			</Card>
			<!-- end card -->

			<Card>
				<CardHeader>
					<h5 class="card-title mb-0">Tags</h5>
				</CardHeader>
				<CardBody>
					<div class="mb-3">
						<Label for="choices-categories-input" class="form-label">Categories</Label>
						<Select class="form-select" id="choices-categories-input" items={categoryOption} />
					</div>

					<div>
						<Label for="choices-text-input" class="form-label">Skills</Label>
						<Select class="form-control" id="choices-text-input" isMulti={true} items={SingleOptions}
							multiple />
					</div>
				</CardBody>
				<!-- end card body -->
			</Card>
			<!-- end card -->

			<Card>
				<CardHeader>
					<h5 class="card-title mb-0">Members</h5>
				</CardHeader>
				<CardBody>
					<div class="mb-3">
						<Label for="choices-lead-input" class="form-label">Team Lead</Label>
						<Select class="form-select" items={options} />
					</div>

					<div>
						<Label class="form-label">Team Members</Label>
						<div class="avatar-group">
							<a href="{null}" class="avatar-group-item shadow" id="tooltip-1">
								<div class="avatar-xs">
									<img src={avatar3} alt="" class="rounded-circle img-fluid" />
								</div>
							</a>
							<Tooltip target="tooltip-1" placement="top">Brent Gonzalez</Tooltip>
							<a href="{null}" class="avatar-group-item shadow" id="tooltip-2" title="Sylvia Wright">
								<div class="avatar-xs">
									<div class="avatar-title rounded-circle bg-secondary">S</div>
								</div>
							</a>
							<Tooltip target="tooltip-2" placement="top">Sylvia Wright</Tooltip>

							<a href="{null}" class="avatar-group-item shadow" id="tooltip-3">
								<div class="avatar-xs">
									<img src={avatar4} alt="" class="rounded-circle img-fluid" />
								</div>
							</a>
							<Tooltip target="tooltip-3" placement="top">Ellen Smith</Tooltip>

							<a href="{null}" class="avatar-group-item shadow" id="tooltip-4">
								<div class="avatar-xs" data-bs-toggle="modal" data-bs-target="#inviteMembersModal">
									<div
										class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
										+
									</div>
								</div>
							</a>
							<Tooltip target="tooltip-4" placement="top">Add Members</Tooltip>
						</div>
					</div>
				</CardBody>
				<!-- end card body -->
			</Card>
			<!-- end card -->
			</Col>
			<!-- end col -->
		</Row>
	</Container>
</div>