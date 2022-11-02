import Swal from 'sweetalert2'
import { deleteProduto } from "../../service/api";

export function confirm(id, setUpdate) {
    Swal.fire({
        title: 'Você tem certeza que quer deletar este produto?',
        text: "Esta ação não poderá ser desfeita!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#2A7AE4',
        confirmButtonText: 'Sim, deletar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteProduto(id, setUpdate);
        }
    });
}