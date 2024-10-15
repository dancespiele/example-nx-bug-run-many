# ExampleMultyRunReproduce

## How repreduce bug in run many

1. run `nx run-many -t serve` - will work
2. run `nx run-many -t secure` - will hang
3. run `nx run multy-run:secure` - will work
4. change in apps/multy-run/project.json task `serve` for `server` and run `nx run-many -t server` - will hang
