<script>
</script>

<div class="container">
  <div class="row">
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">Empleados</div>
        <div class="card-body">
          <form>
            <div class="mb-4">
              <label for="" class="form-label">Id</label>
              <input
                type="text"
                class="form-control"
                name="id"
                id="id"
                aria-describedby="helpId"
                placeholder=""
              />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                aria-describedby="helpId"
                placeholder=""
              />
            </div>

            <div class="mb-3">
              <label for="" class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                aria-describedby="helpId"
                placeholder=""
              />
            </div>

            <button type="button" class="btn btn-primary"
              >Agregar Empleado</button
            >
            <button type="button" class="btn btn-primary">Actualizar</button>
          </form>
        </div>
      </div>
      <div class="card-footer text-muted" />
    </div>

    <div class="col-md-7">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Column 1</th>
            <th scope="col">Column 2</th>
            <th scope="col">Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R1C1</td>
            <td>R1C2</td>
            <td>R1C3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
