<script lang="ts">
    import { Button } from "$lib/components/ui/button";
</script>

<form action="/api/logout" method="POST">
    <Button type="submit" variant="link" class="mr-8">Logout</Button>
</form>

