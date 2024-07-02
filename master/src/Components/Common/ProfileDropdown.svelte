<script>
    import { onMount } from 'svelte';
    import {
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap";
    import { goto, invalidateAll } from '$app/navigation';

    let user = null;
    let userImage = '';

    // Function to get user data from localStorage
    function getUserData() {
        const userData = localStorage.getItem('authUser');
        if (userData) {
            user = JSON.parse(userData);
            userImage = getImageUrl(user.image);
        } else {
            // Use a placeholder image URL if no user data is available
            userImage = 'https://example.com/path-to-public-image.jpg';
        }
    }

    // Function to get a valid image URL
    // function getImageUrl(image) {
    //     if (image.startsWith('C:\\Users\\MSI DESKTOP\\Downloads\\')) {
    //         return extractImageUrlFromLocalPath(image);
    //     } else {
    //         return image;
    //     }
    // }


    // function extractImageUrlFromLocalPath(image) {
    //     const serverUrl = 'http://localhost:3000/images/';
    //     const imageName = image.split('\\').pop();
    //     return `${serverUrl}${imageName}`;
    // }
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

    // Logout function
    const logout = async function () {
        await invalidateAll();
        localStorage.removeItem('authUser');
        goto('/authentication/login');
    }

    // Fetch user data when the component is mounted
    onMount(() => {
        getUserData();
    });
    
</script>

<style>
    .header-profile-user {
        width: 50px;
        height: 60px;
    }
</style>

<Dropdown class="ms-sm-3 header-item topbar-user">
    <DropdownToggle type="button" color="" class="btn material-shadow-none" id="page-header-user-dropdown p-0">
        <span class="d-flex align-items-center">
            <img class="rounded-circle header-profile-user" src={userImage} alt="Header Avatar" />
            <span class="text-start ms-xl-2">
                {#if user}
                <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{user.name}</span>
                <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{user.email}</span>
                {:else}
                <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                {/if}
            </span>
        </span>
    </DropdownToggle>
    <DropdownMenu end>
        <!-- item-->
        <h6 class="dropdown-header">Welcome {#if user}{user.name}{:else}Anna{/if}!</h6>
        <DropdownItem href="/pages/profile/simple"><i
                class="mdi mdi-account-circle text-muted fs-16 align-middle me-1" /> <span
                class="align-middle">Profile</span></DropdownItem>
        <DropdownItem href="/apps-chat"><i class="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" />
            <span class="align-middle">Messages</span></DropdownItem>
        <DropdownItem href="/tasks/apps-tasks-kanban"><i
                class="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1" />
            <span class="align-middle">Taskboard</span></DropdownItem>
        <DropdownItem href="/pages/faqs"><i class="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1" />
            <span class="align-middle">Help</span></DropdownItem>
        <div class="dropdown-divider" />
        <DropdownItem href="/pages/profile/simple"><i class="mdi mdi-wallet text-muted fs-16 align-middle me-1" />
            <span class="align-middle">Balance : <b>$5971.67</b></span></DropdownItem>
        <DropdownItem href="/pages/profile/simple"><span
                class="badge bg-success-subtle text-success mt-1 float-end">New</span><i
                class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1" /> <span
                class="align-middle">Settings</span></DropdownItem>
        <DropdownItem href="/authenticationInner/lockscreen/auth-lockscreen-basic"><i
                class="mdi mdi-lock text-muted fs-16 align-middle me-1" />
            <span class="align-middle">Lock screen</span></DropdownItem>
        <DropdownItem href={null} on:click={logout}><i
                class="mdi mdi-logout text-muted fs-16 align-middle me-1" />
            <span class="align-middle" data-key="t-logout">Logout</span></DropdownItem>
    </DropdownMenu>
</Dropdown>

<!-- Display the image URL as text -->
<!-- <div class="image-url-text">
    <p><img src={userImage} alt="User Image" class="image"></p>
</div> -->
