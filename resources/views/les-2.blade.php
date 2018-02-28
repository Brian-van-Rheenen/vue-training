<!DOCTYPE html>
<html>
<head>
    <title>Les 2</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css">
    <style type=text/css>
        body {
            padding: 40px;
        }
    </style>
</head>
<body>

    <div id="les-2" class="container">

        <message title="Hello World" body="Lorem ipsum dollar sit amet."></message>
        <message title="Hello Universe" body="Lorem ipsum dollar sit amet."></message>

        <modal v-if="showModal" @close="showModal = false">
            <p>We insert text here.</p>
        </modal>

        <button @click="showModal = true">Show Modal</button>
        <button @click="showModalcard = true">Show Modalcard</button>

        <tabs>

            <tab name="About Us" :selected="true">

                <h1>Here is the content for the about us tab.</h1>

            </tab>

            <tab name="About Our Culture">

                <h1>Here is the content for the about our culture tab.</h1>

            </tab>

            <tab name="About Our Vision">

                <h1>Here is the content for the about our vision tab.</h1>

            </tab>

        </tabs><br>

        <coupon></coupon>

        <h1 v-if="couponApplied">You used a coupon!</h1>

        <modal-card v-if="showModalcard" @close="showModalcard = false">

            <template slot="header">My Title</template>

            Here is my main content

            <template slot="footer">

                <a class="button is-success" @click="showModalcard = false">Save changes</a>
                <a class="button" @click="showModalcard = false">Cancel</a>

            </template>

        </modal-card><br><br>

        <progress-view inline-template>

            <div>

                <h1>Your Progress Through This Course Is @{{ completionRate }}%</h1>

                <p><button @click="completionRate += 10">Update Completion Rate</button></p>

            </div>

        </progress-view><br>

        <couponcode v-model="coupon"></couponcode>

    </div>

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/les-2.js') }}"></script>
</body>
</html>