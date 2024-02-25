<div class="flex h-1/2 w-screen gap-6">
  <div class="flex flex-col items-center gap-4 w-full">
    <p class="text-xl">Recto</p>
    <form class="card border w-full h-3/4 w-full flex flex-col justify-between gap-2 p-2">
      <div class="flex items-center w-full h-full">
        <input
          class="textarea textarea-bordered textarea-lg w-full h-1/2 card-title border-2 text-center"
          type="text"
          name="question"
          placeholder="Question"
        />
      </div>
      <div class="flex justify-between">
        <button class="btn btn-secondary" type="button">Cancel</button>
        <button class="btn btn-primary" type="submit">Save</button>
      </div>
    </form>
  </div>
  <div class="flex flex-col items-center w-full gap-4">
    <p class="text-xl">Verso</p>
    <form class="card border h-3/4 w-full flex flex-col gap-2 p-2">
      <input
        class="textarea textarea-bordered textarea-lg h-62 card-body border-2"
        type="text"
        name="answer"
        placeholder="Answer"
      />
      <input
        class="textarea textarea-bordered textarea-lg h-62 card-body border-2"
        type="text"
        name="Description"
        placeholder="Description"
      />
      <div class="flex justify-between">
        <button class="btn btn-secondary" type="button">Cancel</button>
        <button class="btn btn-primary" type="submit">Save</button>
      </div>
    </form>
  </div>
</div>
