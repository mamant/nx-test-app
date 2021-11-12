export function getContractsList() {
  return fetch('/api/contracts').then((data) => data.json());
}

export function getContract(id) {
  return fetch(`/api/contracts/${id}`).then((data) => data.json());
}
