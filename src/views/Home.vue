<template>
  <div class="page">
    <div class="buttons">
      <b-button v-b-modal.add-modal>
        Add Calendar Event
      </b-button>
    </div>

    <FullCalendar :options="calendarOptions" />

    <b-modal
      id="add-modal"
      ref="add-modal"
      title="Add Calendar Event"
      hide-footer
    >
      <CalendarForm :edit="false" @eventSaved="closeModal()" />
    </b-modal>

    <b-modal
      id="edit-modal"
      ref="edit-modal"
      title="Edit Calendar Event"
      hide-footer
    >
      <CalendarForm :edit="true" :calendarEvent="calendarEvent" @eventSaved="closeModal()" />
    </b-modal>
  </div>
</template>

<script>
import '@fullcalendar/core/vdom';
import CalendarForm from "@/components/CalendarForm.vue";
import { requestsMixin } from "../mixins/requestsMixin.js";

import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
  name: "Home",
  components: {
    CalendarForm,
    FullCalendar
  },
  mixins: [requestsMixin],
  data() {
    return {
      calendarEvent: {}
    };
  },
  computed: {
    calendarOptions() {
      return {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        events: this.events,
        dateClick: this.handleDateClick
      }
    },
    events() {
      return this.$store.state.events;
    }
  },
  async beforeMount() {
    await this.getEvents();
  },
  methods: {
    async getEvents() {
      const response = await this.getCalendar();
      this.$store.commit("setEvents", response.data);
    },
    handleDateClick() {
      alert("Date clicked!");
    },
    closeModal() {
      this.$refs["add-modal"].hide();
      this.$refs["edit-modal"].hide();
      this.calendarEvent = {};
    },
    openEditModal(event) {
      let { id, start, end, title } = event;
      this.calendarEvent = { id, start, end, title };
      this.$refs["edit-modal"].show();
    }
  }
};
</script>

<style lang="scss" scoped>
  .buttons {
    margin-bottom: 10px;
  }
</style>