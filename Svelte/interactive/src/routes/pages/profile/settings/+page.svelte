<svelte:head>
  <title>Profile Settings | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import {
		Card,
		CardBody,
		CardHeader,
		Col,
		Container,
		Form,
		Input,
		Label,
		Nav,
		NavItem,
		NavLink,
		Row,
		TabContent,
		TabPane
	} from 'sveltestrap';
	import Link from 'svelte-link';
	import Flatpickr from 'svelte-flatpickr';
	import Select from 'svelte-select';
	import profilebg from '../../../../assets/images/profile-bg.jpg'
	import avatar1 from '../../../../assets/images/users/avatar-1.jpg'
	
	let activeTab = 1;

	const skillOptions = [
		{ value: 'Select your Skill', label: 'Select your Skill' },
		{ value: 'CSS', label: 'CSS' },
		{ value: 'HTML', label: 'HTML' },
		{ value: 'PYTHON', label: 'PYTHON' },
		{ value: 'JAVA', label: 'JAVA' },
		{ value: 'ASP.NET', label: 'ASP.NET' }
	];

	const selectYears = [
		{ value: 'Select years', label: 'Select years' },
		{ value: '2001', label: '2001' },
		{ value: '2002', label: '2002' },
		{ value: '2003', label: '2003' },
		{ value: '2004', label: '2004' },
		{ value: '2005', label: '2005' },
		{ value: '2006', label: '2006' },
		{ value: '2007', label: '2007' },
		{ value: '2008', label: '2008' },
		{ value: '2009', label: '2009' },
		{ value: '2010', label: '2010' },
		{ value: '2011', label: '2011' },
		{ value: '2012', label: '2012' },
		{ value: '2013', label: '2013' },
		{ value: '2014', label: '2014' },
		{ value: '2015', label: '2015' },
		{ value: '2016', label: '2016' },
		{ value: '2017', label: '2017' },
		{ value: '2018', label: '2018' },
		{ value: '2019', label: '2019' },
		{ value: '2020', label: '2020' },
		{ value: '2021', label: '2021' },
		{ value: '2022', label: '2022' }
	];
</script>

<div class="page-content">
	<Container fluid>
		<div class="position-relative mx-n4 mt-n4">
			<div class="profile-wid-bg profile-setting-img">
				<img src={profilebg} class="profile-wid-img" alt="" />
				<div class="overlay-content">
					<div class="text-end p-3">
						<div class="p-0 ms-auto rounded-circle profile-photo-edit">
							<Input
								id="profile-foreground-img-file-input"
								type="file"
								class="profile-foreground-img-file-input"
							/>
							<Label
								for="profile-foreground-img-file-input"
								class="profile-photo-edit btn btn-light">
								<i class="ri-image-edit-line align-bottom me-1" /> Change Cover
							</Label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Row>
			<Col xxl={3}>
				<Card class="mt-n5">
					<CardBody class="p-4">
						<div class="text-center">
							<div class="profile-user position-relative d-inline-block mx-auto  mb-4">
								<img
									src={avatar1}
									class="rounded-circle avatar-xl img-thumbnail user-profile-image"
									alt="user-profile"
								/>
								<div class="avatar-xs p-0 rounded-circle profile-photo-edit">
									<Input id="profile-img-file-input" type="file" class="profile-img-file-input" />
									<Label for="profile-img-file-input" class="profile-photo-edit avatar-xs">
										<span class="avatar-title rounded-circle bg-light text-body">
											<i class="ri-camera-fill" />
										</span>
									</Label>
								</div>
							</div>
							<h5 class="fs-16 mb-1">Anna Adame</h5>
							<p class="text-muted mb-0">Lead Designer / Developer</p>
						</div>
					</CardBody>
				</Card>

				<Card>
					<CardBody>
						<div class="d-flex align-items-center mb-5">
							<div class="flex-grow-1">
								<h5 class="card-title mb-0">Complete Your Profile</h5>
							</div>
							<div class="flex-shrink-0">
								<Link href="{null}" class="badge bg-light text-primary fs-12"
									><i class="ri-edit-box-line align-bottom me-1" /> Edit</Link
								>
							</div>
						</div>
						<div class="progress animated-progress custom-progress progress-label">
							<div class="progress-bar bg-info"
								role="progressbar"
								style="width: 30%"
								aria-valuenow="30"
								aria-valuemin="0"
								aria-valuemax="100">
								<div class="label">30%</div>
							</div>
						</div>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<div class="d-flex align-items-center mb-4">
							<div class="flex-grow-1">
								<h5 class="card-title mb-0">Portfolio</h5>
							</div>
							<div class="flex-shrink-0">
								<Link href="{null}" class="badge bg-light text-primary fs-12"
									><i class="ri-add-fill align-bottom me-1" /> Add</Link
								>
							</div>
						</div>
						<div class="mb-3 d-flex">
							<div class="avatar-xs d-block flex-shrink-0 me-3">
								<span class="avatar-title rounded-circle fs-16 bg-dark text-light">
									<i class="ri-github-fill" />
								</span>
							</div>
							<Input
								type="email"
								class="form-control"
								id="gitUsername"
								placeholder="Username"
								value="@daveadame"
							/>
						</div>
						<div class="mb-3 d-flex">
							<div class="avatar-xs d-block flex-shrink-0 me-3">
								<span class="avatar-title rounded-circle fs-16 bg-primary">
									<i class="ri-global-fill" />
								</span>
							</div>
							<Input
								type="text"
								class="form-control"
								id="websiteInput"
								placeholder="www.example.com"
								value="www.velzon.com"
							/>
						</div>
						<div class="mb-3 d-flex">
							<div class="avatar-xs d-block flex-shrink-0 me-3">
								<span class="avatar-title rounded-circle fs-16 bg-success">
									<i class="ri-dribbble-fill" />
								</span>
							</div>
							<Input
								type="text"
								class="form-control"
								id="dribbleName"
								placeholder="Username"
								value="@dave_adame"
							/>
						</div>
						<div class="d-flex">
							<div class="avatar-xs d-block flex-shrink-0 me-3">
								<span class="avatar-title rounded-circle fs-16 bg-danger">
									<i class="ri-pinterest-fill" />
								</span>
							</div>
							<Input
								type="text"
								class="form-control"
								id="pinterestName"
								placeholder="Username"
								value="Advance Dave"
							/>
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col xxl={9}>
				<Card class="mt-xxl-n5">
					<CardHeader>
						<Nav class="nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
							<NavItem>
								<NavLink class="" on:click={() => (activeTab = 1)} active={activeTab == 1}>
									Personal Details
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="{null}" on:click={() => (activeTab = 2)} active={activeTab == 2}>
									Change Password
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="{null}" on:click={() => (activeTab = 3)} active={activeTab == 3}>
									Experience
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="{null}" on:click={() => (activeTab = 4)} active={activeTab == 4}>
									Privacy Policy
								</NavLink>
							</NavItem>
						</Nav>
					</CardHeader>
					<CardBody class="p-4">
						<TabContent>
							<TabPane tabId={1} class={activeTab == 1 ? 'active' : ''}>
								<Form>
									<Row>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="firstnameInput" class="form-label">First Name</Label>
												<Input
													type="text"
													class="form-control"
													id="firstnameInput"
													placeholder="Enter your firstname"
													value="Dave"
												/>
											</div>
										</Col>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="lastnameInput" class="form-label">Last Name</Label>
												<Input
													type="text"
													class="form-control"
													id="lastnameInput"
													placeholder="Enter your lastname"
													value="Adame"
												/>
											</div>
										</Col>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="phonenumberInput" class="form-label">Phone Number</Label>
												<Input
													type="text"
													class="form-control"
													id="phonenumberInput"
													placeholder="Enter your phone number"
													value="+(1) 987 6543"
												/>
											</div>
										</Col>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="emailInput" class="form-label">Email Address</Label>
												<Input
													type="email"
													class="form-control"
													id="emailInput"
													placeholder="Enter your email"
													value="daveadame@velzon.com"
												/>
											</div>
										</Col>
										<Col lg={12}>
											<div class="mb-3">
												<Label for="JoiningdatInput" class="form-label">Joining Date</Label>
												<Flatpickr
													class="form-control"
													options={{
														dateFormat: 'd M, Y'
													}}
												/>
											</div>
										</Col>
										<Col lg={12}>
											<div class="mb-3">
												<Label for="skillsInput" class="form-label">Skills</Label>

												<Select
													class="form-select mb-3"
													placeholder="Select your Skill"
													items={skillOptions}
												/>
											</div>
										</Col>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="designationInput" class="form-label">Designation</Label>
												<Input
													type="text"
													class="form-control"
													id="designationInput"
													placeholder="Designation"
													value="Lead Designer / Developer"
												/>
											</div>
										</Col>
										<Col lg={6}>
											<div class="mb-3">
												<Label for="websiteInput1" class="form-label">Website</Label>
												<Input
													type="text"
													class="form-control"
													id="websiteInput1"
													placeholder="www.example.com"
													value="www.velzon.com"
												/>
											</div>
										</Col>
										<Col lg={4}>
											<div class="mb-3">
												<Label for="cityInput" class="form-label">City</Label>
												<Input
													type="text"
													class="form-control"
													id="cityInput"
													placeholder="City"
													value="California"
												/>
											</div>
										</Col>
										<Col lg={4}>
											<div class="mb-3">
												<Label for="countryInput" class="form-label">Country</Label>
												<Input
													type="text"
													class="form-control"
													id="countryInput"
													placeholder="Country"
													value="United States"
												/>
											</div>
										</Col>
										<Col lg={4}>
											<div class="mb-3">
												<Label for="zipcodeInput" class="form-label">Zip Code</Label>
												<Input
													type="text"
													class="form-control"
													minLength="5"
													maxLength="6"
													id="zipcodeInput"
													placeholder="Enter zipcode"
													value="90011"
												/>
											</div>
										</Col>
										<Col lg={12}>
											<div class="mb-3 pb-2">
												<Label for="exampleFormControlTextarea" class="form-label"
													>Description</Label
												>
												<textarea
													class="form-control"
													id="exampleFormControlTextarea"
													rows="3"
													value="Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family."
												/>
											</div>
										</Col>
										<Col lg={12}>
											<div class="hstack gap-2 justify-content-end">
												<button type="button" class="btn btn-primary">Updates</button>
												<button type="button" class="btn btn-soft-info">Cancel</button>
											</div>
										</Col>
									</Row>
								</Form>
							</TabPane>

							<TabPane tabId={2} class={activeTab == 2 ? 'active' : ''}>
								<Form>
									<Row class="g-2">
										<Col lg={4}>
											<div>
												<Label for="oldpasswordInput" class="form-label">Old Password*</Label>
												<Input
													type="password"
													class="form-control"
													id="oldpasswordInput"
													placeholder="Enter current password"
												/>
											</div>
										</Col>

										<Col lg={4}>
											<div>
												<Label for="newpasswordInput" class="form-label">New Password*</Label>
												<Input
													type="password"
													class="form-control"
													id="newpasswordInput"
													placeholder="Enter new password"
												/>
											</div>
										</Col>

										<Col lg={4}>
											<div>
												<Label for="confirmpasswordInput" class="form-label"
													>Confirm Password*</Label
												>
												<Input
													type="password"
													class="form-control"
													id="confirmpasswordInput"
													placeholder="Confirm password"
												/>
											</div>
										</Col>

										<Col lg={12}>
											<div class="mb-3">
												<Link href="{null}" class="link-primary text-decoration-underline">Forgot Password ?</Link>
											</div>
										</Col>

										<Col lg={12}>
											<div class="text-end">
												<button type="button" class="btn btn-info">Change Password</button>
											</div>
										</Col>
									</Row>
								</Form>
								<div class="mt-4 mb-3 border-bottom pb-2">
									<div class="float-end">
										<Link href="{null}" class="link-primary">All Logout</Link>
									</div>
									<h5 class="card-title">Login History</h5>
								</div>
								<div class="d-flex align-items-center mb-3">
									<div class="flex-shrink-0 avatar-sm">
										<div class="avatar-title bg-light text-primary rounded-3 fs-18">
											<i class="ri-smartphone-line" />
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6>iPhone 12 Pro</h6>
										<p class="text-muted mb-0">Los Angeles, United States - March 16 at 2:47PM</p>
									</div>
									<div>
										<Link href="{null}">Logout</Link>
									</div>
								</div>
								<div class="d-flex align-items-center mb-3">
									<div class="flex-shrink-0 avatar-sm">
										<div class="avatar-title bg-light text-primary rounded-3 fs-18">
											<i class="ri-tablet-line" />
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6>Apple iPad Pro</h6>
										<p class="text-muted mb-0">
											Washington, United States - November 06 at 10:43AM
										</p>
									</div>
									<div>
										<Link href="{null}">Logout</Link>
									</div>
								</div>
								<div class="d-flex align-items-center mb-3">
									<div class="flex-shrink-0 avatar-sm">
										<div class="avatar-title bg-light text-primary rounded-3 fs-18">
											<i class="ri-smartphone-line" />
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6>Galaxy S21 Ultra 5G</h6>
										<p class="text-muted mb-0">Conneticut, United States - June 12 at 3:24PM</p>
									</div>
									<div>
										<Link href="{null}">Logout</Link>
									</div>
								</div>
								<div class="d-flex align-items-center">
									<div class="flex-shrink-0 avatar-sm">
										<div class="avatar-title bg-light text-primary rounded-3 fs-18">
											<i class="ri-macbook-line" />
										</div>
									</div>
									<div class="flex-grow-1 ms-3">
										<h6>Dell Inspiron 14</h6>
										<p class="text-muted mb-0">Phoenix, United States - July 26 at 8:10AM</p>
									</div>
									<div>
										<Link href="{null}">Logout</Link>
									</div>
								</div>
							</TabPane>

							<TabPane tabId={3} class={activeTab == 3 ? 'active' : ''}>
								<form>
									<div id="newlink">
										<div id="1">
											<Row>
												<Col lg={12}>
													<div class="mb-3">
														<Label for="jobTitle" class="form-label">Job Title</Label>
														<Input
															type="text"
															class="form-control"
															id="jobTitle"
															placeholder="Job title"
															value="Lead Designer / Developer"
														/>
													</div>
												</Col>

												<Col lg={6}>
													<div class="mb-3">
														<Label for="companyName" class="form-label">Company Name</Label>
														<Input
															type="text"
															class="form-control"
															id="companyName"
															placeholder="Company name"
															value="Themesbrand"
														/>
													</div>
												</Col>

												<Col lg={6}>
													<div class="mb-3">
														<Label for="experienceYear" class="form-label"
															>Experience Years</Label
														>
														<Row>
															<Col lg={5}>
																<Select
																	class="form-control"
																	name="experienceYear"
																	id="experienceYear"
																	placeholder="Select years"
																	items={selectYears}
																/>
															</Col>

															<div class="col-auto align-self-center">to</div>

															<Col lg={5}>
																<Select
																	class="form-control"
																	items={selectYears}
																	name="choices-single-default2"
																>
																</Select>
															</Col>
														</Row>
													</div>
												</Col>

												<Col lg={12}>
													<div class="mb-3">
														<Label for="jobDescription" class="form-label"
															>Job Description</Label
														>
													</div>
												</Col>

												<div class="hstack gap-2 justify-content-end">
													<Link class="btn btn-info" href={"#"}>Delete</Link>
												</div>
											</Row>
										</div>
									</div>
									<div id="newForm" style="display: none" />

									<Col lg={12}>
										<div class="hstack gap-2">
											<button type="submit" class="btn btn-info">Update</button>
											<Link href="{null}" class="btn btn-primary">Add New</Link>
										</div>
									</Col>
								</form>
							</TabPane>

							<TabPane tabId={4} class={activeTab == 4 ? 'active' : ''}>
								<div class="mb-4 pb-2">
									<h5 class="card-title text-decoration-underline mb-3">Security:</h5>
									<div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
										<div class="flex-grow-1">
											<h6 class="fs-14 mb-1">Two-factor Authentication</h6>
											<p class="text-muted">
												Two-factor authentication is an enhanced security meansur. Once enabled,
												you'll be required to give two types of identification when you log into
												Google Authentication and SMS are Supported.
											</p>
										</div>
										<div class="flex-shrink-0 ms-sm-3">
											<Link href="{null}" class="btn btn-sm btn-primary"
												>Enable Two-facor Authentication</Link
											>
										</div>
									</div>
									<div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
										<div class="flex-grow-1">
											<h6 class="fs-14 mb-1">Secondary Verification</h6>
											<p class="text-muted">
												The first factor is a password and the second commonly includes a text with
												a code sent to your smartphone, or biometrics using your fingerprint, face,
												or retina.
											</p>
										</div>
										<div class="flex-shrink-0 ms-sm-3">
											<Link href="{null}" class="btn btn-sm btn-primary">Set up secondary method</Link>
										</div>
									</div>
									<div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
										<div class="flex-grow-1">
											<h6 class="fs-14 mb-1">Backup Codes</h6>
											<p class="text-muted mb-sm-0">
												A backup code is automatically generated for you when you turn on two-factor
												authentication through your iOS or Android Twitter app. You can also
												generate a backup code on twitter.com.
											</p>
										</div>
										<div class="flex-shrink-0 ms-sm-3">
											<Link href="{null}" class="btn btn-sm btn-primary">Generate backup codes</Link>
										</div>
									</div>
								</div>
								<div class="mb-3">
									<h5 class="card-title text-decoration-underline mb-3">
										Application Notifications:
									</h5>
									<ul class="list-unstyled mb-0">
										<li class="d-flex">
											<div class="flex-grow-1">
												<Label for="directMessage" class="form-check-label fs-14"
													>Direct messages</Label
												>
												<p class="text-muted">Messages from people you follow</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="directMessage"
														checked
													/>
												</div>
											</div>
										</li>
										<li class="d-flex mt-2">
											<div class="flex-grow-1">
												<Label class="form-check-label fs-14" for="desktopNotification">
													Show desktop notifications
												</Label>
												<p class="text-muted">
													Choose the option you want as your default setting. Block a site: Next to
													"Not allowed to send notifications," click Add.
												</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="desktopNotification"
														checked
													/>
												</div>
											</div>
										</li>
										<li class="d-flex mt-2">
											<div class="flex-grow-1">
												<Label class="form-check-label fs-14" for="emailNotification">
													Show email notifications
												</Label>
												<p class="text-muted">
													Under Settings, choose Notifications. Under Select an account, choose the
													account to enable notifications for.
												</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="emailNotification"
													/>
												</div>
											</div>
										</li>
										<li class="d-flex mt-2">
											<div class="flex-grow-1">
												<Label class="form-check-label fs-14" for="chatNotification">
													Show chat notifications
												</Label>
												<p class="text-muted">
													To prevent duplicate mobile notifications from the Gmail and Chat apps, in
													settings, turn off Chat notifications.
												</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="chatNotification"
													/>
												</div>
											</div>
										</li>
										<li class="d-flex mt-2">
											<div class="flex-grow-1">
												<Label class="form-check-label fs-14" for="purchaesNotification">
													Show purchase notifications
												</Label>
												<p class="text-muted">
													Get real-time purchase alerts to protect yourself from fraudulent charges.
												</p>
											</div>
											<div class="flex-shrink-0">
												<div class="form-check form-switch">
													<input
														class="form-check-input"
														type="checkbox"
														role="switch"
														id="purchaesNotification"
													/>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div>
									<h5 class="card-title text-decoration-underline mb-3">Delete This Account:</h5>
									<p class="text-muted">
										Go to the Data & Privacy section of your profile Account. Scroll to "Your data &
										privacy options." Delete your Profile Account. Follow the instructions to delete
										your account :
									</p>
									<div>
										<Input
											type="password"
											class="form-control"
											id="passwordInput"
											placeholder="Enter your password"
											value="make@321654987"
											style="max-width: 265px"
										/>
									</div>
									<div class="hstack gap-2 mt-3">
										<Link href="{null}" class="btn btn-soft-info">Close & Delete This Account</Link>
										<Link href="{null}" class="btn btn-light">Cancel</Link>
									</div>
								</div>
							</TabPane>
						</TabContent>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
