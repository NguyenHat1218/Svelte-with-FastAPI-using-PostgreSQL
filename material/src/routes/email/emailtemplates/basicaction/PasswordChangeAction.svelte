<script>
    import { Row, Col } from 'sveltestrap';
    import Link from 'svelte-link';
    import { LockIcon } from "svelte-feather-icons";
</script>
<svelte:head>
    <style>
        .feather-lock{
            color: #0ab39c;fill: rgba(10,179,156,.16); height: 30px; width: 30px;
        }
    </style>
</svelte:head>
<Row>
    <Col lg={12}>
    <div class="justify-content-between d-flex align-items-center mt-3 mb-4">
        <h5 class="mb-0 pb-1 text-decoration-underline">
            Password Changes Action
        </h5>
    </div>
    </Col>

    <Col class="col-12">
    <table class="body-wrap"
        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: transparent; margin: 0;">
        <tr style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
            <td style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;"
                valign="top"></td>
            <td class="container" width="600"
                style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;"
                valign="top">
                <div class="content"
                    style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
                    <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope
                        itemtype="http://schema.org/ConfirmAction"
                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; margin: 0; border: none;">
                        <tr style="font-family: 'Roboto', sans-serif; font-size: 14px; margin: 0;">
                            <td class="content-wrap"
                                style="font-family: 'Roboto', sans-serif; box-sizing: border-box; color: #495057; font-size: 14px; vertical-align: top; margin: 0;padding: 30px; box-shadow: 0 3px 15px rgba(30,32,37,.06); ;border-radius: 7px; background-color: #fff;"
                                valign="top">
                                <meta itemprop="name" content="Confirm Email"
                                    style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" />
                                <table width="100%" cellpadding="0" cellspacing="0"
                                    style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                    <tr
                                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block"
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;"
                                            valign="top">
                                            <div style="text-align: center;">
                                                <!-- <i data-feather="lock" style="color: #0ab39c;fill: rgba(10,179,156,.16); height: 30px; width: 30px;"></i> -->
                                                <LockIcon
                                                    style="color: #3bad71;fill: rgba(10,179,156,.16); height: 30px; width: 30px;" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr
                                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block"
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 24px; vertical-align: top; margin: 0; padding: 0 0 10px;  text-align: center;"
                                            valign="top">
                                            <h4
                                                style="font-family: 'Roboto', sans-serif; margin-bottom: 0px;font-weight: 500; line-height: 1.5;">
                                                Change or reset your password</h4>
                                        </td>
                                    </tr>
                                    <tr
                                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block"
                                            style="font-family: 'Roboto', sans-serif; color: #878a99; box-sizing: border-box; font-size: 15px; vertical-align: top; margin: 0; padding: 0 0 12px; text-align: center;"
                                            valign="top">
                                            <p style="margin-bottom: 13px; line-height: 1.5;">You can change your
                                                password for security reasons or reset it if you forget it. Your Google
                                                Account password is used to access many Google products, like Gmail and
                                                YouTube.</p>
                                        </td>
                                    </tr>
                                    <tr
                                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block" itemprop="handler" itemscope
                                            itemtype="http://schema.org/HttpActionHandler"
                                            style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 22px; text-align: center;"
                                            valign="top">
                                            <a href="!#" itemprop="url"
                                                style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: .8125rem; color: #FFF; text-decoration: none; font-weight: 400; text-align: center; cursor: pointer; display: inline-block; border-radius: .25rem; text-transform: capitalize; background-color: #4b38b3; margin: 0; border-color: #4b38b3; border-style: solid; border-width: 1px; padding: .5rem .9rem;;box-shadow: 0 3px 3px rgba(56,65,74,0.1);">Reset
                                                Password</a>
                                        </td>
                                    </tr>

                                    <tr
                                        style="font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                                        <td class="content-block"
                                            style="color: #878a99; font-family: 'Roboto', sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0; padding-top: 5px"
                                            valign="top">
                                            <h5
                                                style="font-family: 'Roboto', sans-serif; margin-bottom: 5px;font-weight: 500; line-height: 1.5;font-size: 15px;">
                                                Change your password</h5>
                                            <ul
                                                style="margin-bottom: 0px;gap: 0.5rem; flex: 1 1 auto;display: flex;flex-direction: column;align-self: stretch;">
                                                <li>
                                                    Open your account. You might need to sign in.
                                                </li>
                                                <li>
                                                    Under "Security," select Signing in to Google.
                                                </li>
                                                <li>
                                                    Choose Password. You might need to sign in again.
                                                </li>
                                                <li>
                                                    Enter your new password, then select Change Password.
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <div style="text-align: center; margin: 28px auto 0px auto;">
                        <h4>Need Help ?</h4>
                        <p style="color: #878a99;">Please send and feedback or bug info to <a href="!#"
                                style="font-weight: 500px;">info@velzon.com</a></p>
                        <p style="font-family: 'Roboto', sans-serif; font-size: 14px;color: #98a6ad; margin: 0px;">2022
                            Velzon. Design & Develop by Themesbrand</p>
                    </div>
                </div>
            </td>
        </tr>
    </table>
    </Col>
</Row>