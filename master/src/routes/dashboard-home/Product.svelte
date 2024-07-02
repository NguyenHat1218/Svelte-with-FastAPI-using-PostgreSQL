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

function getImageUrl(image) {
   
    if (image.startsWith('https://www.google.com')) {
      // Thực hiện xử lý để lấy URL hợp lệ từ chuỗi image
      return extractImageUrlFromGoogleUrl(image);
    } else {
      return image; // Hoặc trả về ngay URL nếu đã là URL hợp lệ
    }
  }

  function extractImageUrlFromGoogleUrl(googleUrl) {

    let urlParams = new URLSearchParams(googleUrl);
    let imgurl = urlParams.get('imgurl');
    return decodeURIComponent(imgurl);
  }
  async function handleDelete(image_id) {
    try {
      await axios.delete('http://localhostt:8000/image/${image_id}');
      result = result.filter(item => item.image_id !== image_id); // Loại bỏ bản ghi đã xóa khỏi danh sách
    } catch (error) {
      console.error('Error:', error);
	}
}

</script>

<style>
	.image {
	  width: 150px; 
	  height: 70px; 
	}
	.action-button1 {
    cursor: pointer;
    color: white;
	background-color: rgb(237, 14, 14);
    /* text-decoration: underline; */
  }
  .action-button2 {
    cursor: pointer;
    color: black;
	background-color: rgb(16, 161, 218);
    /* text-decoration: underline; */
  }
  .action-button3 {
    cursor: pointer;
    color: black;
	float: left;
	background-color: rgb(16, 161, 218);
    /* text-decoration: underline; */
  }
	
  
	/* Nếu muốn hình ảnh có kích thước cố định */
	/*.fixed-size-image {*/
	  /*width: 150px; */
	  /*height: 150px; */
	  /*object-fit: cover; /* Đảm bảo hình ảnh không bị bóp méo */
	/*}*/
  </style>

<Col>
	<Card class="card-height-100">
		<CardHeader class="align-items-center d-flex">
			<h4 class="card-title mb-0 flex-grow-1">Information</h4>
			<div class="flex-shrink-0">
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
			</div>
		</CardHeader>
		<CardBody>
			<div class="table-responsive table-card">
				<table class="table align-middle table-borderless table-centered table-nowrap mb-0">
					<thead class="text-muted table-light">
						<tr>
							<th scope="col" style="width: 62">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Description</th>
							<th scope="col">Description</th>
							<th scope="col">Actions</th>
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
							<!-- <td><img src={item.image}></td> -->
							<td><img src={getImageUrl(item.image)} alt={item.name} class="image"></td>
							 
								<!-- <img src= {item.image}/> -->
								<!-- {:else}
								<span>No image</span> -->
							<td>
								<div class="action-buttons">
									<!-- <button class="action-button2" on:click={() => handleDel(item.image_id)}>ADD</button> -->
									<button class="action-button1" on:click={() => handleEdit(item.id)}>Edit</button>
									<button class="action-button2" on:click={() => handleDelete(item.image_id)}>Delete</button>
								</div>
							</td>
							
							
                        </tr>
                        {/each}
					</tbody>
				</table>
			</div>
		</CardBody>
	</Card>
</Col>

